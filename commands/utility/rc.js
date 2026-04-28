module.exports = {
  name: 'rc',
  description: 'count server roles',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    const count = msg.guild.roles.cache.size;
    await msg.channel.send(`Roles: ${count}`);
  }
};
