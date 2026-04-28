module.exports = {
  name: 'em',
  description: 'edit your message',
  execute: async (msg, args) => {
    if (!args.length) return;
    
    let target = msg;
    const newContent = args.join(' ');
    
    if (args[0].length === 18 || args[0].length === 19) {
      try {
        target = await msg.channel.messages.fetch(args[0]);
      } catch (e) {
        return;
      }
    }
    
    try {
      if (target.author.id === msg.author.id) {
        await target.edit(newContent);
      }
    } catch (e) {}
  }
};
