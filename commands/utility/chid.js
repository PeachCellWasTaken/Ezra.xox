module.exports = {
  name: 'chid',
  description: 'Get channel ID',
  execute: async (msg, args) => {
    const sent = await msg.channel.send(msg.channelId);
  }
};
