module.exports = {
  name: 'mp',
  description: 'mass ping',
  execute: async (msg, args, client) => {
    if (!msg.guild) return;
    
    const count = Math.min(parseInt(args[0]) || 5, 50);
    const members = Array.from(msg.guild.members.cache.values()).slice(0, 10);
    
    for (let i = 0; i < count; i++) {
      try {
        const pings = members.map(m => `<@${m.id}>`).join(' ');
        await msg.channel.send(pings);
        await new Promise(r => setTimeout(r, 50));
      } catch (e) {}
    }
  }
};
