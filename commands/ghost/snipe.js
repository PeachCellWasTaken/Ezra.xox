module.exports = {
  name: 'snipe',
  description: 'snipe last deleted message',
  execute: async (msg, args, client, persistence, save, lastDeleted) => {
    const deleted = lastDeleted.get(msg.channelId);
    
    if (!deleted) {
      await msg.channel.send('No deleted messages');
      return;
    }
    
    const info = `**${deleted.author}**: ${deleted.content}`;
    await msg.channel.send(info);
  }
};
