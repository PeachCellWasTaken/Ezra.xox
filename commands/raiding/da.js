module.exports = {
  name: 'da',
  description: 'Delete all',
  execute: async (msg, args) => {
    const limit = Math.min(parseInt(args[0]) || 50, 100);
    
    try {
      const messages = await msg.channel.messages.fetch({ limit });
      for (const m of messages.values()) {
        try {
          await m.delete();
          await new Promise(r => setTimeout(r, 100));
        } catch (e) {}
      }
    } catch (e) {}
  }
};
