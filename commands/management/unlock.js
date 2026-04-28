module.exports = {
  name: 'unlock',
  description: 'unlock channel',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    
    try {
      await msg.channel.permissionOverwrites.delete(msg.guild.id);
    } catch (e) {}
  }
};
