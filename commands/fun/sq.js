module.exports = {
  name: 'sq',
  description: 'make text square',
  execute: async (msg, args) => {
    if (!args.length) return;
    const text = args.join(' ').toUpperCase();
    const width = text.length + 2;
    let output = '```\n';
    output += '┌' + '─'.repeat(width) + '┐\n';
    output += '│ ' + text + ' │\n';
    output += '└' + '─'.repeat(width) + '┘\n';
    output += '```';
    await msg.channel.send(output);
  }
};
