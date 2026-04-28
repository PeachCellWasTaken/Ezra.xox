module.exports = {
  name: 'rot',
  description: 'rot13 cipher',
  execute: async (msg, args) => {
    if (!args.length) return;
    const text = args.join(' ');
    const rot13 = text.replace(/[a-zA-Z]/g, c => {
      const code = c.charCodeAt(0);
      return String.fromCharCode(code < 78 ? code + 13 : code - 13);
    });
    await msg.channel.send(rot13);
  }
};
