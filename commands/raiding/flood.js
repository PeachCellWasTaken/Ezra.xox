module.exports = {
  name: 'flood',
  description: 'flood channel',
  execute: async (msg, args) => {
    if (args.length < 2) return;
    
    const count = Math.min(parseInt(args[0]), 100);
    const text = args.slice(1).join(' ') || '🔥';
    
    for (let i = 0; i < count; i++) {
      try {
        await msg.channel.send(text);
        await new Promise(r => setTimeout(r, 10));
      } catch (e) {}
    }
  }
};
