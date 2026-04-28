module.exports = {
  name: 'ar',
  description: 'auto react to messages',
  execute: async (msg, args, client, persistence, save) => {
    if (!args.length) {
      delete persistence.autoreact[msg.channelId];
      save();
      return;
    }
    
    const emoji = args[0];
    persistence.autoreact[msg.channelId] = emoji;
    save();
    
    await msg.channel.send(`ar set to ${emoji}`);
  }
};
