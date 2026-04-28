module.exports = {
  name: 'b64',
  description: 'encode to base64',
  execute: async (msg, args) => {
    if (!args.length) return;
    const text = args.join(' ');
    const encoded = Buffer.from(text).toString('base64');
    await msg.channel.send(`\`${encoded}\``);
  }
};
