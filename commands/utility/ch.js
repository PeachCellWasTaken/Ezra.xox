module.exports = {
  name: 'ch',
  description: 'get channel id',
  execute: async (msg, args) => {
    await msg.channel.send(msg.channelId);
  }
};
