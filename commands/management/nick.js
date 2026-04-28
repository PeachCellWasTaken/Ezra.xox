module.exports = {
  name: 'nick',
  description: 'nickname member',
  execute: async (msg, args, client) => {
    if (!msg.guild || args.length < 2) return;
    
    let user = msg.mentions.users.first();
    if (!user) {
      try {
        user = await client.users.fetch(args[0]);
      } catch (e) {
        return;
      }
    }
    
    const nickname = args.slice(1).join(' ');
    const member = msg.guild.members.cache.get(user.id);
    
    if (member) {
      try {
        await member.setNickname(nickname);
      } catch (e) {}
    }
  }
};
