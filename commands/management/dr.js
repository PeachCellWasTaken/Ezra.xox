module.exports = {
  name: 'dr',
  description: 'delete role',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    
    let role = msg.mentions.roles.first();
    if (!role && args[0]) {
      role = msg.guild.roles.cache.find(r => r.name === args.join(' '));
    }
    
    if (role) {
      try {
        await role.delete();
      } catch (e) {}
    }
  }
};
