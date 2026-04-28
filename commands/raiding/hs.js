module.exports = {
  name: 'hs',
  description: 'here spam',
  execute: async (msg, args) => {
    const count = Math.min(parseInt(args[0]) || 5, 50);
    
    for (let i = 0; i < count; i++) {
      try {
        await msg.channel.send('@here');
        await new Promise(r => setTimeout(r, 20));
      } catch (e) {}
    }
  }
};
