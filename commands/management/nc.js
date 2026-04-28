module.exports = {
  name: 'nc',
  description: 'nuke channel',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    
    try {
      const name = msg.channel.name;
      const pos = msg.channel.position;
      await msg.channel.delete();
      await msg.guild.channels.create(name, { position: pos });
    } catch (e) {}
  }
};
