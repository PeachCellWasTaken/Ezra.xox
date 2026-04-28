module.exports = {
  name: 'ui',
  description: 'get user information',
  execute: async (msg, args, client) => {
    let user = msg.mentions.users.first();
    if (!user && args[0]) {
      try {
        user = await client.users.fetch(args[0]);
      } catch (e) {
        return;
      }
    }
    if (!user) user = msg.author;
    
    let member = msg.guild?.members.cache.get(user.id);
    
    let info = `**User:** ${user.tag}\n`;
    info += `**ID:** ${user.id}\n`;
    info += `**Created:** <t:${Math.floor(user.createdTimestamp / 1000)}:F>\n`;
    if (member) {
      info += `**Joined:** <t:${Math.floor(member.joinedTimestamp / 1000)}:F>\n`;
      info += `**Roles:** ${member.roles.cache.size}\n`;
    }
    if (user.bot) info += `**Bot:** Yes\n`;
    
    await msg.channel.send(info);
  }
};
