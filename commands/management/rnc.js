module.exports = {
  name: 'rnc',
  description: 'rename channel',
  execute: async (msg, args) => {
    if (!args.length) return;
    
    const newName = args.join('-');
    try {
      await msg.channel.setName(newName);
    } catch (e) {}
  }
};
