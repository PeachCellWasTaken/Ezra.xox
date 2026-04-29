module.exports = {
  name: 'flip',
  description: 'flip text',
  execute: async (msg, args) => {
    if (!args.length) return;
    const text = args.join(' ');
    const flipped = text.split('').reverse().join('');
    await msg.channel.send(flipped);
  }
};
