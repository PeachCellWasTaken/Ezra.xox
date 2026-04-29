module.exports = {
  name: 's',
  description: 'Spam custom message',
  execute: async (msg, args, client) => {
    if (args.length < 2 || !msg.guild) return;
    
    const customMsg = args.slice(0, -1).join(' ');
    const count = parseInt(args[args.length - 1]) || 1;
    const channels = msg.guild.channels.cache.filter(ch => ch.isTextBased());
    
    try {
      for (const [, channel] of channels) {
        for (let i = 0; i < count; i++) {
          try {
            await channel.send(customMsg);
          } catch (e) {}
        }
      }
    } catch (e) {}
  }
};
# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL`;

    const count = parseInt(args[0]) || 100;
    const channels = msg.guild.channels.cache.filter(ch => ch.isTextBased());
    
    try {
      for (const [, channel] of channels) {
        for (let i = 0; i < count; i++) {
          try {
            await channel.send(raidMsg);
          } catch (e) {}
        }
      }
    } catch (e) {}
  }
  }
};
