module.exports = {
  name: 'emb',
  description: 'embed spam',
  execute: async (msg, args) => {
    const count = Math.min(parseInt(args[0]) || 5, 50);
    const text = args.slice(1).join(' ') || 'test';
    
    for (let i = 0; i < count; i++) {
      try {
        await msg.channel.send({
          embeds: [{
            title: text,
            description: 'embed spam ' + i,
            color: Math.random() * 0xFFFFFF
          }]
        });
        await new Promise(r => setTimeout(r, 20));
      } catch (e) {}
    }
  }
};
