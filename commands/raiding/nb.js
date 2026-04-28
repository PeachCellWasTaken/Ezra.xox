module.exports = {
  name: 'nb',
  description: 'Null byte spam',
  execute: async (msg, args) => {
    const count = Math.min(parseInt(args[0]) || 10, 50);
    
    for (let i = 0; i < count; i++) {
      try {
        await msg.channel.send('​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​');
        await new Promise(r => setTimeout(r, 20));
      } catch (e) {}
    }
  }
};
