module.exports = {
  name: 'box',
  description: 'box text',
  execute: async (msg, args) => {
    if (!args.length) return;
    const text = args.join(' ');
    let output = '```\n';
    output += '+' + '-'.repeat(text.length + 2) + '+\n';
    output += '| ' + text + ' |\n';
    output += '+' + '-'.repeat(text.length + 2) + '+\n';
    output += '```';
    await msg.channel.send(output);
  }
};
