module.exports = {
  name: 'dc',
  description: 'delete channel',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    
    let ch = msg.mentions.channels.first() || msg.guild.channels.cache.get(args[0]);
    if (!ch) ch = msg.channel;
    
    try {
      await ch.delete();
    } catch (e) {}
  }
};
