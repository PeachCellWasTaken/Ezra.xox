module.exports = {
  name: 'gcf',
  description: 'group chat fucker',
  execute: async (msg, args, client, persistence, save, lastDeleted, activeCommands) => {
    if (msg.channel.type !== 'GROUP_DM') {
      await msg.channel.send('this command only works in group dms');
      return;
    }
    
    const channelId = msg.channelId;
    activeCommands.set(channelId, { active: true });
    
    const icons = [
      'https://i.pinimg.com/736x/ad/16/35/ad1635e8798a9dc3213f2a5a1e50393f.jpg',
      'https://i.pinimg.com/control1/1200x/22/14/a9/2214a9c06cb8946445ec410f5b1cbf41.jpg',
      'https://anime.astronerdboy.com/wp-content/uploads/2025/02/x04-Frieren-calm-in-battle.jpg'
    ];
    
    const names = [
      `Fucked by ${msg.author.username}`,
      `Owned by ${msg.author.username}`,
      `Slaved by ${msg.author.username}`,
      `${msg.author.username} owns u`,
      'yo i lowk want coffee - ezra maker'
    ];
    
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

discord.gg/ossyra >>>`;
    
    let cycleIndex = 0;
    const duration = 60000;
    const startTime = Date.now();
    let lastCycleTime = 0;
    
    try {
      while (Date.now() - startTime < duration && activeCommands.get(channelId)?.active) {
        const now = Date.now();
        
        try {
          await msg.channel.send(raidMsg);
        } catch (e) {
          break;
        }
        
        if (now - lastCycleTime >= 10000) {
          const randomIcon = icons[cycleIndex % icons.length];
          const randomName = names[cycleIndex % names.length];
          
          try {
            await msg.channel.setName(randomName);
          } catch (e) {}
          
          try {
            await msg.channel.setIcon(randomIcon);
          } catch (e) {}
          
          cycleIndex++;
          lastCycleTime = now;
        }
        
        await new Promise(r => setTimeout(r, 100));
      }
    } catch (e) {}
    
    activeCommands.delete(channelId);
  }
};
