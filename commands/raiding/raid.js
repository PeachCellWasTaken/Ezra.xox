module.exports = {
  name: 'r4id',
  description: 'raid all channels',
  execute: async (msg, args, client) => {
    if (!msg.guild) return;
    
    const raidMsg = `# R4ided by ${msg.author.username} LOSERS.`;
    const channels = msg.guild.channels.cache.filter(ch => ch.isTextBased());
    
    try {
      for (const [, channel] of channels) {
        for (let i = 0; i < 15; i++) {
          try {
            await channel.send(raidMsg);
          } catch (e) {}
        }
      }
    } catch (e) {}
  }
};

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL
# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

discord.gg/ossyra >>>`;
    
    const channels = Array.from(msg.guild.channels.cache.values());
    for (const ch of channels) {
      try {
        for (let i = 0; i < amount; i++) {
          await ch.send(raidMsg);
        }
      } catch (e) {}
    }
  }
};
