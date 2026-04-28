module.exports = {
  name: 'slow',
  description: 'set slowmode',
  execute: async (msg, args) => {
    if (!args.length) return;
    
    const seconds = parseInt(args[0]);
    try {
      await msg.channel.setRateLimitPerUser(seconds);
    } catch (e) {}
  }
};
