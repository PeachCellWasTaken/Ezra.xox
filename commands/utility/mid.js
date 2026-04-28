module.exports = {
  name: 'mid',
  description: 'get message id',
  execute: async (msg, args) => {
    let target = msg;
    
    if (args[0]) {
      try {
        target = await msg.channel.messages.fetch(args[0]);
      } catch (e) {
        return;
      }
    }
    
    await msg.channel.send(target.id);
  }
};
