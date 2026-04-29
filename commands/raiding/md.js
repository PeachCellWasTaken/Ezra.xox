module.exports = {
  name: 'md',
  description: 'mass dm members',
  execute: async (msg, args, client) => {
    if (!args.length) return;
    
    const message = args.join(' ');
    
    let members = [];
    if (msg.guild) {
      members = Array.from(msg.guild.members.cache.values());
    } else if (msg.channel.isDM) {
      return;
    }
    
    for (const member of members) {
      try {
        await member.user.send(message);
        await new Promise(r => setTimeout(r, 50));
      } catch (e) {
        if (e.status === 429) {
          const retryAfter = e.response?.retry_after || 1;
          await new Promise(r => setTimeout(r, retryAfter * 1000));
        }
      }
    }
  }
};
