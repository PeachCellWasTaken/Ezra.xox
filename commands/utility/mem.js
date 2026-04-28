module.exports = {
  name: 'mem',
  description: 'count server members',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    const count = msg.guild.memberCount;
    await msg.channel.send(`Members: ${count}`);
  }
};
