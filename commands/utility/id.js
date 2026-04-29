module.exports = {
  name: 'id',
  description: 'get your uid',
  execute: async (msg, args) => {
    await msg.channel.send(`uid: ${msg.author.id}`);
  }
};
