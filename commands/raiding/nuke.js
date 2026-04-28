module.exports = {
  name: 'nuke',
  description: 'Channel nuke',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    
    try {
      await msg.channel.clone();
      await msg.channel.delete();
    } catch (e) {}
  }
};
