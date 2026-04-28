module.exports = {
  name: 'chc',
  description: 'count server channels',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    const count = msg.guild.channels.cache.size;
    await msg.channel.send(`Channels: ${count}`);
  }
};
