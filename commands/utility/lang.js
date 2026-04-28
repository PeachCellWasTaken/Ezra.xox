module.exports = {
  name: 'lang',
  description: 'change bot language',
  args: [{ name: 'language', desc: 'es (spanish) or en (english)' }],
  examples: [',lang es', ',lang en'],
  execute: async (msg, args, client, persistence, save) => {
    if (!args[0]) return;
    
    const lang = args[0].toLowerCase();
    
    if (lang !== 'es' && lang !== 'en') {
      await msg.channel.send('invalid language. use: es (spanish) or en (english)');
      return;
    }
    
    const fs = require('fs');
    const path = require('path');
    const config = require(path.join(__dirname, '../../config.json'));
    
    config.language = lang;
    
    try {
      fs.writeFileSync(
        path.join(__dirname, '../../config.json'),
        JSON.stringify(config, null, 2)
      );
      
      const langText = lang === 'es' ? 'idioma cambiado a espanol' : 'language changed to english';
      await msg.channel.send(langText);
    } catch (e) {
      await msg.channel.send('error changing language');
    }
  }
};
