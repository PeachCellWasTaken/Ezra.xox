module.exports = {
  name: 'si',
  description: 'get server information',
  execute: async (msg, args) => {
    if (!msg.guild) return;
    
    const guild = msg.guild;
    let info = `**Server:** ${guild.name}\n`;
    info += `**ID:** ${guild.id}\n`;
    info += `**Owner:** <@${guild.ownerId}>\n`;
    info += `**Members:** ${guild.memberCount}\n`;
    info += `**Channels:** ${guild.channels.cache.size}\n`;
    info += `**Roles:** ${guild.roles.cache.size}\n`;
    info += `**Created:** <t:${Math.floor(guild.createdTimestamp / 1000)}:F>\n`;
    info += `**Boost Level:** ${guild.premiumTier}\n`;
    
    await msg.channel.send(info);
  }
};
