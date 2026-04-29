module.exports = {
  name: 'lock',
  description: 'lock channel',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    
    try {
      await msg.channel.permissionOverwrites.edit(msg.guild.id, { SendMessages: false });
    } catch (e) {}
  }
};
