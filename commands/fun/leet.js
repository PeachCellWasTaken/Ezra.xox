module.exports = {
  name: 'leet',
  description: 'convert to leet',
  execute: async (msg, args) => {
    if (!args.length) return;
    let text = args.join(' ');
    text = text.replace(/e/gi, '3');
    text = text.replace(/a/gi, '4');
    text = text.replace(/o/gi, '0');
    text = text.replace(/s/gi, '5');
    text = text.replace(/t/gi, '7');
    text = text.replace(/l/gi, '1');
    const sent = await msg.channel.send(text);
  }
};
