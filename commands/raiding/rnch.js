module.exports = {
  name: 'rnch',
  description: 'Rename channels',
  execute: async (msg, args) => {
    if (!msg.guild || !args.length) return;
    
    const newName = args.join(' ');
    const channels = Array.from(msg.guild.channels.cache.values()).slice(0, 5);
    
    for (const ch of channels) {
      try {
        await ch.setName(newName);
        await new Promise(r => setTimeout(r, 200));
      } catch (e) {}
    }
  }
};
