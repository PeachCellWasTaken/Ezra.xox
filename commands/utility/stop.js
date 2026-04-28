module.exports = {
  name: 'stop',
  description: 'stop active command',
  execute: async (msg, args, client, persistence, save, lastDeleted, activeCommands) => {
    const channelId = msg.channelId;
    
    if (activeCommands.has(channelId)) {
      activeCommands.delete(channelId);
      await msg.channel.send('stopped');
    } else {
      await msg.channel.send('no active command');
    }
  }
};
