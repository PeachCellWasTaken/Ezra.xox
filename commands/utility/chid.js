module.exports = {
  name: 'chid',
  description: 'get channel id',
  execute: async (msg, args) => {
    await msg.channel.send(`cid: ${msg.channelId}`);
  }
};
