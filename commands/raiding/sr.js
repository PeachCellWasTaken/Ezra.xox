module.exports = {
  name: 'sr',
  description: 'Role mention spam',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    if (!args.length) return;
    
    let role = msg.mentions.roles.first() || msg.guild.roles.cache.find(r => r.name === args.join(' '));
    if (!role) return;
    
    const count = Math.min(parseInt(args[args.length - 1]) || 5, 50);
    
    for (let i = 0; i < count; i++) {
      try {
        await msg.channel.send(`<@&${role.id}>`);
        await new Promise(r => setTimeout(r, 20));
      } catch (e) {}
    }
  }
};
