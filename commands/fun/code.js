module.exports = {
  name: 'code',
  description: 'code block text',
  execute: async (msg, args) => {
    if (!args.length) return;
    const text = args.join(' ');
    const sent = await msg.channel.send(`\`${text}\``);
  }
};
