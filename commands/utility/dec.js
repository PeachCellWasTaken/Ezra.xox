module.exports = {
  name: 'dec',
  description: 'decode base64',
  execute: async (msg, args) => {
    if (!args.length) return;
    try {
      const decoded = Buffer.from(args[0], 'base64').toString('utf8');
      await msg.channel.send(decoded);
    } catch (e) {
      return;
    }
  }
};
