module.exports = {
  name: 'spam',
  description: 'Spam messages',
  execute: async (msg, args, client) => {
    if (!args.length || !msg.guild) return;
    
    const raidMsg = `# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL
# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL
# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL
# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL
# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL
# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL
# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL
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
