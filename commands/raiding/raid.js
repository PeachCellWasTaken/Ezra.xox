module.exports = {
  name: 'r4id',
  description: 'raid server',
  args: [{ name: 'amount', desc: 'number of times to send message (default 100)' }],
  execute: async (msg, args, client) => {
    if (!msg.guild) return;
    
    const amount = parseInt(args[0]) || 100;
    
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
# R4IDED BY ${msg.author.username} W EZRA.XOX LOLLLLLLLL

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
