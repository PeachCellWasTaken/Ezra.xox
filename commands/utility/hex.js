module.exports = {
  name: 'hex',
  description: 'convert to hex',
  execute: async (msg, args) => {
    if (!args.length) return;
    const text = args.join(' ');
    const hex = Buffer.from(text).toString('hex');
    await msg.channel.send(`\`${hex}\``);
  }
};
