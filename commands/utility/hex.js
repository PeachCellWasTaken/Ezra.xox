module.exports = {
  name: 'hex',
  description: 'Convert to hex',
  execute: async (msg, args) => {
    if (!args.length) return;
    const text = args.join(' ');
    const hex = Buffer.from(text).toString('hex');
    const sent = await msg.channel.send(`\`${hex}\``);
  }
};
