module.exports = {
  name: 'id',
  description: 'Get your user ID',
  execute: async (msg, args) => {
    const sent = await msg.channel.send(msg.author.id);
  }
};
