module.exports = {
  name: 'ascii',
  description: 'ascii art',
  execute: async (msg, args) => {
    if (!args.length) return;
    const text = args.join(' ');
    const ascii = text.split('').map(c => {
      const code = c.charCodeAt(0);
      return `${code} `;
    }).join('');
    const sent = await msg.channel.send(`\`${ascii}\``);
  }
};
