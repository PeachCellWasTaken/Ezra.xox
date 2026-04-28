module.exports = {
  name: 'ut',
  description: 'get bot uptime',
  execute: async (msg, args, client) => {
    const uptime = client.uptime;
    const hours = Math.floor(uptime / 3600000);
    const minutes = Math.floor((uptime % 3600000) / 60000);
    await msg.channel.send(`Uptime: ${hours}h ${minutes}m`);
  }
};
