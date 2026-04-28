module.exports = {
  name: 'gid',
  description: 'get guild id',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    await msg.channel.send(msg.guildId);
  }
};
