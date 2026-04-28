module.exports = {
  name: 'cow',
  description: 'cowsay',
  execute: async (msg, args) => {
    if (!args.length) return;
    const text = args.join(' ');
    let output = '```\n';
    output += ' ' + '_'.repeat(text.length + 2) + '\n';
    output += '< ' + text + ' >\n';
    output += ' ' + '-'.repeat(text.length + 2) + '\n';
    output += '        \\   ^__^\n';
    output += '         \\  (oo)\\_______\n';
    output += '            (__)\\       )\\/\\\n';
    output += '                ||----w |\n';
    output += '                ||     ||\n';
    output += '```';
    await msg.channel.send(output);
  }
};
