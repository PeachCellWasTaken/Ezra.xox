module.exports = {
  name: 'ping',
  description: 'Check bot latency',
  execute: async (msg, args) => {
    const sent = await msg.channel.send('pong');
    const latency = sent.createdTimestamp - msg.createdTimestamp;
    await sent.edit(`pong! ${latency}ms`);
  }
};
