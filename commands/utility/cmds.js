const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'cmds',
  description: 'list all available commands',
  execute: async (msg, args, client) => {
    const categories = ['utility', 'fun', 'raiding', 'management', 'ghost'];
    const commands = {};
    
    categories.forEach(category => {
      const dir = path.join(__dirname, '..', category);
      const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
      commands[category] = files.map(f => f.replace('.js', '')).sort();
    });
    
    const totalCmds = Object.values(commands).reduce((sum, arr) => sum + arr.length, 0);
    
    let text = `\n━━━━━━━━━━━━━━━━━━━━━━\n**ezra** \`v1.0.0\`\n━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `\n**${totalCmds} total**\n\n`;
    
    Object.entries(commands).forEach(([cat, cmds]) => {
      text += `**${cat.toUpperCase()}** \`${cmds.length}\`\n`;
      text += cmds.map(c => `\`${c}\``).join(' • ');
      text += '\n\n';
    });
    
    text += `━━━━━━━━━━━━━━━━━━━━━━\n .gg/ossyra`;
    
    try {
      await msg.author.send(text);
      console.log(`sent cmds to ${msg.author.tag}`);
    } catch (e) {
      try {
        await msg.channel.send(text);
      } catch (e2) {
        console.log('couldnt send cmds');
      }
    }
  }
};
