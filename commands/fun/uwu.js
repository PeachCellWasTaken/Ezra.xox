module.exports = {
  name: 'uwu',
  description: 'uwu text',
  execute: async (msg, args) => {
    if (!args.length) return;
    let text = args.join(' ');
    text = text.replace(/r/gi, 'w');
    text = text.replace(/l/gi, 'w');
    text = text.replace(/R/g, 'W');
    text = text.replace(/L/g, 'W');
    await msg.channel.send(text);
  }
};
