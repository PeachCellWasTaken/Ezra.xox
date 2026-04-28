module.exports = {
  name: 'chs',
  description: 'channel spam',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    
    const count = Math.min(parseInt(args[0]) || 5, 50);
    
    for (let i = 0; i < count; i++) {
      try {
        await msg.guild.channels.create(`spam-${i}`, { type: 'GUILD_TEXT' });
        await new Promise(r => setTimeout(r, 200));
      } catch (e) {}
    }
  }
};
