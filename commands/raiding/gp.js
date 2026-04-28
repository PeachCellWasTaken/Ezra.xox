module.exports = {
  name: 'gp',
  description: 'ghost ping user',
  execute: async (msg, args, client) => {
    if (!args.length) return;
    
    let user = msg.mentions.users.first();
    if (!user) {
      try {
        user = await client.users.fetch(args[0]);
      } catch (e) {
        return;
      }
    }
    
    if (!user) return;
    
    try {
      const m = await msg.channel.send(`<@${user.id}>`);
      await m.delete();
    } catch (e) {}
  }
};
