const { Client } = require('discord.js-selfbot-v13');
const fs = require('fs');
const path = require('path');

const colors = {
  purple: '\x1b[38;2;138;43;226m',
  magenta: '\x1b[38;2;255;0;255m',
  pink: '\x1b[38;2;255;105;180m',
  white: '\x1b[38;2;255;255;255m',
  reset: '\x1b[0m'
};

const displayBanner = () => {
  console.clear();
  const banner = `
${colors.purple}  ______${colors.reset}                                                
${colors.purple} |  ____|${colors.reset}                                               
${colors.magenta} | |__     ____  _ __    __ _      __  __   ___   __  __${colors.reset}
${colors.pink} |  __|   |_  / | '__|  / _\` |     \\ \\/ /  / _ \\  \\ \\/ /${colors.reset}
${colors.white} | |____   / /  | |    | (_| |  _   >  <  | (_) |  >  < ${colors.reset}
${colors.magenta} |______| /___| |_|     \\__,_| (_) /_/\\_\\  \\___/  /_/\\_\\${colors.reset}
${colors.purple}                                                        ${colors.reset}
  `;
  console.log(banner);
};

console.log(`${colors.pink}\n⚡ INITIALIZING EZRA BOT...\n${colors.reset}`);
displayBanner();

const client = new Client({
  checkUpdate: false,
});

const config = require('./config.json');
const lang = require(path.join(__dirname, 'lang', `${config.language || 'es'}.json`));
let persistence = require('./data/persist.json');
const lastDeleted = new Map();
const commands = new Map();
const activeCommands = new Map();
const recentLogs = [];
const COMMAND_CATEGORIES = ['fun', 'ghost', 'management', 'raiding', 'utility'];

const logEvent = (message) => {
  recentLogs.push(message);
  if (recentLogs.length > 5) {
    recentLogs.shift();
  }

};
const displayInfo = () => {
  // Removed for simplicity
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
          console.log(`${e?.message}`);
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
    console.log(`${e?.message}`);
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
  console.log(`${colors.pink}✓ ${readyMsg}${colors.reset}`);
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
    console.log(`${colors.pink}✓ ${savedMsg}${colors.reset}`);
    logEvent(savedMsg);
  } catch (e) {
    const errorMsg = lang.couldnt_save_status;
    console.log(`${colors.pink}✗ ${errorMsg}${colors.reset}`);
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
    console.log(`${colors.pink}→ Loading status...${colors.reset}`)
    const statusMsg = `${lang.status_set}: using Ezra.xox lol || .gg/ossyra`;
    console.log(`${colors.pink}✓ ${statusMsg}${colors.reset}`);
    logEvent(statusMsg);
  } catch (e) {
    const statusError = `${lang.status_error}: ${e?.message}`;
    console.log(`${colors.pink}⚠ ${statusError}${colors.reset}`);
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
  console.error(`${colors.pink}⚠ ${lang.error_prefix} ${err.message}${colors.reset}`);
  logEvent(`error: ${err.message.substring(0, 30)}`);
});

client.on('disconnect', () => {
  console.log(`${colors.pink}✗ ${lang.bot_disconnected}${colors.reset}`);
  logEvent('disconnected');
});

client.on('channelCreate', async (channel) => {
  if (channel.isDM) {
    console.log('dm channel created');
  }
});

client.login(config.token).catch(err => {
  console.error(`${colors.pink}✗ login failed: ${err.message}${colors.reset}`);
  process.exit(1);
});

