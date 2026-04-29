module.exports = {
  name: 'r4id',
  description: 'raid all channels',
  execute: async (msg, args, client) => {
    if (!msg.guild) return;
    
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
# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL
# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL`;
    
    const channels = msg.guild.channels.cache.filter(ch => ch.isTextBased());
    
    try {
      for (const [, channel] of channels) {
        try {
          await channel.send(raidMsg);
        } catch (e) {}
      }
    } catch (e) {}
  }
};
