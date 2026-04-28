module.exports = {
  name: 'ps',
  description: 'ping spam',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    
    const count = Math.min(parseInt(args[0]) || 5, 50);
    
    for (let i = 0; i < count; i++) {
      try {
        await msg.channel.send('@everyone');
        await new Promise(r => setTimeout(r, 20));
      } catch (e) {}
    }
  }
};
