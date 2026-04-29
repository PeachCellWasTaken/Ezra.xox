module.exports = {
  name: 'banner',
  description: 'get user banner',
  execute: async (msg, args, client) => {
    let user = msg.mentions.users.first();
    if (!user && args[0]) {
      try {
        user = await client.users.fetch(args[0]);
      } catch (e) {
        return;
      }
    }
    if (!user) user = msg.author;
    
    const bannerUrl = user.bannerURL({ size: 2048 });
    if (bannerUrl) {
      await msg.channel.send(bannerUrl);
    } else {
      await msg.channel.send('no banner');
    }
  }
};
