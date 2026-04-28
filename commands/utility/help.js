const fs = require('fs');
const path = require('path');
const config = require('../../config.json');

module.exports = {
  name: 'help',
  description: 'get help for a command',
  execute: async (msg, args, client) => {
    if (!args[0]) {
      return await msg.author.send(`use: \`${config.prefix}help <cmd>\`\nexample: \`${config.prefix}help ping\``).catch(() => msg.channel.send(`use: \`${config.prefix}help <cmd>\``));
    }

    const cmdName = args[0].toLowerCase();
    const categories = ['utility', 'fun', 'raiding', 'management', 'ghost'];
    let cmd = null;
    let category = null;

    for (const cat of categories) {
      const filePath = path.join(__dirname, '..', cat, `${cmdName}.js`);
      if (fs.existsSync(filePath)) {
        try {
          cmd = require(filePath);
          category = cat;
          break;
        } catch (e) {
        }
      }
    }

    if (!cmd) {
      return await msg.author.send(`command not found: \`${cmdName}\``).catch(() => msg.channel.send(`command not found: \`${cmdName}\``));
    }

    let text = `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `**${cmd.name.toUpperCase()}**\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    text += `**category:** ${category}\n`;
    text += `**description:** ${cmd.description || 'no description'}\n`;
    text += `**usage:** \`${config.prefix}${cmd.name}\`${cmd.usage ? ` ${cmd.usage}` : ''}\n`;
    
    if (cmd.args) {
      text += `\n**arguments:**\n`;
      cmd.args.forEach(arg => {
        text += `\`${arg.name}\` - ${arg.desc}\n`;
      });
    }

    if (cmd.examples) {
      text += `\n**examples:**\n`;
      cmd.examples.forEach(ex => {
        text += `\`${config.prefix}${cmd.name} ${ex}\`\n`;
      });
    }

    text += `\n━━━━━━━━━━━━━━━━━━━━━━`;

    try {
      await msg.author.send(text);
      console.log(`sent help for ${cmdName}`);
    } catch (e) {
      try {
        await msg.channel.send(text);
      } catch (e2) {
        console.log('couldnt send help');
      }
    }
  }
};
