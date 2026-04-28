const { Client } = require('discord.js-selfbot-v13');
const fs = require('fs');
const path = require('path');

const colors = {
  blue1: '\x1b[38;2;0;0;255m',
  blue2: '\x1b[38;2;0;0;238m',
  blue3: '\x1b[38;2;0;0;139m',
  purple: '\x1b[38;2;138;43;226m',
  blue4: '\x1b[38;2;0;24;168m',
  reset: '\x1b[0m'
};

const displayBanner = () => {
  console.clear();
  const banner = `
${colors.blue1},────.                         ,───.                   ,─.──,  _,.───._           ,─.──, ${colors.reset}
${colors.blue2}   ,─.──\` , ╲ ,──,────. .─.,.───.  .──.'  ╲         .──.─.  ╱=╱, .',─.' , ─  \`..──.─.  ╱=╱, .'${colors.reset}
${colors.purple}  │==│─  _.─\`╱==╱\` ─ .╱╱==╱  \`   ╲ ╲==╲─╱╲ ╲        ╲==╲ ─╲╱=╱─ ╱ ╱==╱_,  ,  ─ ╲==╲ ─╲╱=╱─ ╱${colors.reset}
${colors.blue3}  │==│   \`.─.\`──\`=╱. ╱│==│─, .=., │╱==╱─│_╲ │        ╲==╲ \`─' ,╱ │==│   .=.     ╲==╲ \`─' ,╱${colors.reset}
${colors.blue4} ╱==╱_ ,    ╱ ╱==╱─ ╱ │==│   '='  ╱╲==╲,   ─ ╲        │==│,  ─ │ │==│_ : ;=:  ─ ││==│,  ─ │${colors.reset}
${colors.blue1} │==│    .─' ╱==╱─ ╱─.│==│─ ,   .' ╱==╱ ─   ,│       ╱==╱   ,   ╲│==│ , '='     ╱==╱   ,   ╲${colors.reset}
${colors.blue2} │==│_  ,\`─.╱==╱, \`──\`╲==│_  . ,'.╱==╱─  ╱╲ ─ ╲ .=. ╱==╱, .──, ─ ╲╲==╲ ─    ,_ ╱==╱, .──, ─ ╲${colors.reset}
${colors.purple} ╱==╱ ,     │==╲─  ─, ╱==╱  ╱╲ ,  )==╲ _.╲=╲.─':=; :╲==╲─ ╲╱=╱ , ╱ '.='. ─   .'╲==╲─ ╲╱=╱ , ╱${colors.reset}
${colors.blue3} \`──\`─────\`\` \`──\`.─.──\`──\`─\`──\`──' \`──\`         \`=\`  \`──\`─'  \`──\`    \`──\`──''   \`──\`─'  \`──\`${colors.reset}
${colors.blue4}
====================================================================================================${colors.reset}
  `;
  console.log(banner);
};

console.log('booting...');
displayBanner();

const client = new Client({
  checkUpdate: false,
});

const config = require('./config.json');
const lang = require(path.join(__dirname, 'lang', `${config.language || 'es'}.json`));
console.log(`${colors.blue1}${lang.loaded}. token: ${config.token ? config.token.slice(0, 10) + '...' : lang.token_not_set}${colors.reset}`);
let persistence = require('./data/persist.json');
const lastDeleted = new Map();
const commands = new Map();
const activeCommands = new Map();
const recentLogs = [];

const logEvent = (message) => {
  recentLogs.push(message);
  if (recentLogs.length > 5) {
    recentLogs.shift();
  }
};

const displayInfo = () => {
  const serverCount = client.guilds?.cache?.size || 0;
  const friendCount = client.user?.friendCount || 0;
  
  console.log(`
${colors.blue1}───────────────────────────────────────${colors.reset}
${colors.purple}Ezra Info${colors.reset}
${colors.blue1}───────────────────────────────────────${colors.reset}
${colors.blue2}  Servers: ${colors.blue1}${serverCount}${colors.reset}
${colors.blue3}  Friends: ${colors.purple}${friendCount}${colors.reset}
${colors.blue1}───────────────────────────────────────${colors.reset}

${colors.purple}Ezra Logs:${colors.reset}
${colors.blue2}${recentLogs.map(log => `  ${log}`).join('\n')}${colors.reset}

${colors.blue1}───────────────────────────────────────${colors.reset}
  `);
};

const executeMessageLogic = async (msg) => {
  try {
    if (msg.author.id !== config.owner_id) {
      if (persistence.afk[config.owner_id]?.active && msg.mentions.has(config.owner_id)) {
        try {
          await msg.author.send(persistence.afk[config.owner_id].message);
        } catch (e) {
        }
      }
      return;
    }

    if (msg.content.startsWith(config.prefix)) {
      const content = msg.content.slice(config.prefix.length).trim();
      const [cmdName, ...args] = content.split(/\s+/);
      const cmd = commands.get(cmdName);
      
      if (cmd) {
        try {
          await cmd.execute(msg, args, client, persistence, savePersistence, lastDeleted, activeCommands);
          logEvent(`cmd: ${cmdName}`);
        } catch (e) {
          console.log('cmd error:', e?.message);
          logEvent(`error: ${cmdName}`);
        }
        
        try {
          if (msg.deletable) {
            await msg.delete();
          }
        } catch (e) {
        }
      }
    }

    if (persistence.autoreact[msg.channelId]) {
      try {
        await msg.react(persistence.autoreact[msg.channelId]);
      } catch (e) {
      }
    }
  } catch (e) {
    console.log('msg error:', e?.message);
  }
};

const loadCommands = () => {
  COMMAND_CATEGORIES.forEach(category => {
    const categoryPath = path.join(__dirname, 'commands', category);
    if (!fs.existsSync(categoryPath)) return;
    
    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.js'));
    files.forEach(file => {
      try {
        const cmd = require(path.join(categoryPath, file));
        if (cmd.name) {
          commands.set(cmd.name, cmd);
        }
      } catch (e) {
      }
    });
  });
};

const savePersistence = () => {
  try {
    fs.writeFileSync(
      path.join(__dirname, 'data', 'persist.json'),
      JSON.stringify(persistence, null, 2)
    );
  } catch (e) {
  }
};

client.on('ready', () => {
  loadCommands();
  displayBanner();
  const readyMsg = `${lang.ready}`;
  console.log(`${colors.purple}✓ ${readyMsg}${colors.reset}`);
  logEvent(readyMsg);
  
  const currentActivity = client.user.presence?.activities?.[0];
  const currentStatus = {
    state: currentActivity?.state || 'None',
    type: currentActivity?.type || 'CUSTOM',
    name: currentActivity?.name || 'None'
  };
  
  try {
    fs.writeFileSync(
      path.join(__dirname, 'data', 'HERESURSTATUS.txt'),
      JSON.stringify(currentStatus, null, 2)
    );
    const savedMsg = lang.saved_status;
    console.log(`${colors.blue2}✓ ${savedMsg}${colors.reset}`);
    logEvent(savedMsg);
  } catch (e) {
    const errorMsg = lang.couldnt_save_status;
    console.log(`${colors.blue3}✗ ${errorMsg}${colors.reset}`);
    logEvent(errorMsg);
  }
  
  try {
    persistence = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'data', 'persist.json'), 'utf8')
    );
  } catch (e) {
    persistence = { afk: {}, autoreact: {}, remind: {} };
  }
  
  try {
    client.user.setPresence({
      activities: [{
        name: 'Using Ezra.xox lol || .gg/ossyra',
        type: 'CUSTOM',
        state: 'Using Ezra.xox lol || .gg/ossyra'
      }],
      status: 'invisible'
    });
    console.log(`${colors.blue4}→ loading status change...${colors.reset}`)
    const statusMsg = `${lang.status_set}: using Ezra.xox lol || .gg/ossyra`;
    console.log(`${colors.purple}✓ ${statusMsg}${colors.reset}`);
    logEvent(statusMsg);
  } catch (e) {
    const statusError = `${lang.status_error}: ${e?.message}`;
    console.log(`${colors.blue3}⚠ ${statusError}${colors.reset}`);
    logEvent(statusError);
  }
  
  setTimeout(() => {
    displayInfo();
  }, 1000);
});

client.on('messageCreate', async (msg) => {
  await executeMessageLogic(msg);
});

client.on('messageDelete', (msg) => {
  lastDeleted.set(msg.channelId, {
    content: msg.content,
    author: msg.author?.tag,
    timestamp: Date.now()
  });
  
  if (lastDeleted.size > 100) {
    const firstKey = lastDeleted.keys().next().value;
    lastDeleted.delete(firstKey);
  }
});

client.on('error', (err) => {
  console.error(`${colors.purple}⚠ ${lang.error_prefix}${colors.reset}`, err.message);
  logEvent(`error: ${err.message.substring(0, 30)}`);
});

client.on('disconnect', () => {
  console.log(`${colors.blue3}✗ ${lang.bot_disconnected}${colors.reset}`);
  logEvent('disconnected');
});

client.on('channelCreate', async (channel) => {
  if (channel.isDM?.()) {
    console.log('dm channel created');
  }
});

client.login(config.token).catch(err => {
  console.error(`${colors.purple}✗ login failed:${colors.reset}`, err.message);
  process.exit(1);
});

