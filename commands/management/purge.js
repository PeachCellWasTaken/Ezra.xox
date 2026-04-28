module.exports = {
  name: 'purge',
  description: 'delete messages',
  execute: async (msg, args) => {
    const count = Math.min(parseInt(args[0]) || 10, 100);
    
    try {
      const messages = await msg.channel.messages.fetch({ limit: count });
      for (const m of messages.values()) {
        try {
          await m.delete();
          await new Promise(r => setTimeout(r, 100));
        } catch (e) {}
      }
    } catch (e) {}
  }
};
