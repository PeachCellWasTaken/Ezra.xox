module.exports = {
  name: 'mb',
  description: 'mass ban members',
  execute: async (msg, args, client) => {
    if (!msg.guild) return;
    
    try {
      const members = await msg.guild.members.fetch({ limit: 1000 });
      const bannable = members.filter(m => m.bannable && m.id !== client.user.id);
      
      let banned = 0;
      for (let i = 0; i < bannable.size; i += 100) {
        const batch = Array.from(bannable.values()).slice(i, i + 100);
        await Promise.all(batch.map(m => m.ban().catch(() => {})));
        banned += batch.length;
      }
      
      console.log(`banned ${banned} members`);
    } catch (e) {
      console.log('mb failed');
    }
  }
};
