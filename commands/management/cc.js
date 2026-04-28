module.exports = {
  name: 'cc',
  description: 'create channel',
  execute: async (msg, args) => {
    if (!msg.guild || !args.length) return;
    
    const name = args.join('-');
    try {
      await msg.guild.channels.create(name);
    } catch (e) {}
  }
};
