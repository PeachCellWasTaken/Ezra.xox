module.exports = {
  name: 'spam',
  description: 'Spam messages',
  execute: async (msg, args, client) => {
    if (args.length < 2) return;
    
    let channels = [];
    let count = 0;
    let message = '';
    
    if (args[0] === 'all' && msg.guild) {
      channels = Array.from(msg.guild.channels.cache.values());
    } else {
      const ch = msg.mentions.channels.first() || msg.guild?.channels.cache.get(args[0]);
      if (ch) channels.push(ch);
    }
    
    count = parseInt(args[1]);
    message = args.slice(2).join(' ') || 'spam';
    
    if (!channels.length || count > 500) return;
    
    for (const channel of channels) {
      for (let i = 0; i < count; i++) {
        try {
          await channel.send(message);
          await new Promise(r => setTimeout(r, 10));
        } catch (e) {}
      }
    }
  }
};
