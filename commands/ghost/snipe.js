module.exports = {
  name: 'snipe',
  description: 'snipe last deleted message',
  execute: async (msg, args, client, persistence, save, lastDeleted) => {
    const deleted = lastDeleted.get(msg.channelId);
    
    if (!deleted) {
      const sent = await msg.channel.send('No deleted messages');
      return;
    }
    
    const info = `**${deleted.author}**: ${deleted.content}`;
    const sent = await msg.channel.send(info);
  }
};
