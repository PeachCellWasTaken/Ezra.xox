module.exports = {
  name: 'afk',
  description: 'set afk status',
  execute: async (msg, args, client, persistence, save) => {
    if (!args.length || args[0].toLowerCase() === 'clear') {
      delete persistence.afk[msg.author.id];
      save();
      await msg.channel.send('afk cleared');
      return;
    }
    
    const message = args.join(' ');
    persistence.afk[msg.author.id] = {
      active: true,
      message: message
    };
    save();
    
    await msg.channel.send(`afk set: ${message}`);
  }
};
