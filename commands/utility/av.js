module.exports = {
  name: 'av',
  description: 'get user avatar',
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
    
    const avatar = user.displayAvatarURL({ size: 2048 });
    await msg.channel.send(avatar);
  }
};
