module.exports = {
  name: 'mock',
  description: 'mock text',
  execute: async (msg, args) => {
    if (!args.length) return;
    const text = args.join(' ');
    let mocked = '';
    let toggle = true;
    for (const char of text) {
      if (/[a-z]/i.test(char)) {
        mocked += toggle ? char.toUpperCase() : char.toLowerCase();
        toggle = !toggle;
      } else {
        mocked += char;
      }
    }
    const sent = await msg.channel.send(mocked);
  }
};
