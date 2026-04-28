module.exports = {
  name: 'bin',
  description: 'convert to binary',
  execute: async (msg, args) => {
    if (!args.length) return;
    const text = args.join(' ');
    const binary = text.split('').map(c => {
      return c.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
    await msg.channel.send(`\`${binary}\``);
  }
};
