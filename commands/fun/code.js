module.exports = {
  name: 'code',
  description: 'code block text',
  execute: async (msg, args) => {
    if (!args.length) return;
    const text = args.join(' ');
    await msg.channel.send(`\`${text}\``);
  }
};
