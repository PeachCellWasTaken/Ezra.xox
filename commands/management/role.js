module.exports = {
  name: 'role',
  description: 'manage roles',
  execute: async (msg, args, client) => {
    if (!msg.guild || args.length < 3) return;
    
    const action = args[0].toLowerCase();
    const subaction = args[1].toLowerCase();
    
    let user = msg.mentions.users.first();
    if (!user) {
      try {
        user = await client.users.fetch(args[2]);
      } catch (e) {
        return;
      }
    }
    
    const roleName = args.slice(3).join(' ');
    let role = msg.mentions.roles.first() || msg.guild.roles.cache.find(r => r.name === roleName);
    
    if (!role || !user) return;
    
    const member = msg.guild.members.cache.get(user.id);
    if (!member) return;
    
    try {
      if (action === 'add') {
        await member.roles.add(role);
      } else if (action === 'remove') {
        await member.roles.remove(role);
      }
    } catch (e) {}
  }
};
