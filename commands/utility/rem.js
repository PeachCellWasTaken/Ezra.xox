module.exports = {
  name: 'rem',
  description: 'set a reminder',
  execute: async (msg, args, client, persistence, save) => {
    if (!args.length) return;
    
    const delay = parseInt(args[0]) * 1000;
    const remindMsg = args.slice(1).join(' ');
    
    if (!persistence.remind) persistence.remind = {};
    
    setTimeout(async () => {
      try {
        await msg.author.send(`Reminder: ${remindMsg}`);
      } catch (e) {}
    }, delay);
    
    await msg.channel.send(`Reminder set for ${args[0]}s`);
  }
};
