const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'node_modules', 'discord.js-selfbot-v13', 'src', 'managers', 'ClientUserSettingManager.js');

try {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const oldCode = `if ('friend_source_flags' in data) {
      this.addFriendFrom = {
        all: data.friend_source_flags.all || false,
        mutual_friends: data.friend_source_flags.all ? true : data.friend_source_flags.mutual_friends,
        mutual_guilds: data.friend_source_flags.all ? true : data.friend_source_flags.mutual_guilds,
      };
    }`;

  const newCode = `if ('friend_source_flags' in data && data.friend_source_flags) {
      this.addFriendFrom = {
        all: data.friend_source_flags.all || false,
        mutual_friends: data.friend_source_flags.all ? true : data.friend_source_flags.mutual_friends,
        mutual_guilds: data.friend_source_flags.all ? true : data.friend_source_flags.mutual_guilds,
      };
    } else {
      this.addFriendFrom = { all: false, mutual_friends: false, mutual_guilds: false };
    }`;

  if (content.includes(oldCode)) {
    content = content.replace(oldCode, newCode);
    fs.writeFileSync(filePath, content, 'utf8');
  }
} catch (e) {
}
