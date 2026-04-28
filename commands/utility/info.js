const os = require('os');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

module.exports = {
  name: 'info',
  description: 'bot info and stats',
  execute: async (msg, args, client) => {
    try {
      const cpuUsage = getCPUUsage();
      const ramUsage = getRAMUsage();
      const storageUsage = getStorageUsage();
      const cmdCount = getCommandCount();
      const uptimeStr = formatUptime(process.uptime());

      const info = `
**Ezra Stats:**

cpu usage: \`${cpuUsage}%\`
ram usage: \`${ramUsage}%\`
cmd count: \`${cmdCount}\`

support server: discord.gg/ossyra
made by Arko / Arki <3
uptime: \`${uptimeStr}\`
      `.trim();

      await msg.channel.send(info);
    } catch (e) {
    }
  }
};

const getCPUUsage = () => {
  try {
    const cpus = os.cpus();
    let totalIdle = 0;
    let totalTick = 0;
    
    cpus.forEach(cpu => {
      for (const type in cpu.times) {
        totalTick += cpu.times[type];
      }
      totalIdle += cpu.times.idle;
    });
    
    return (100 - ~~(100 * totalIdle / totalTick)).toFixed(1);
  } catch (e) {
    return 'N/A';
  }
};

const getRAMUsage = () => {
  try {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    return ((usedMem / totalMem) * 100).toFixed(1);
  } catch (e) {
    return 'N/A';
  }
};

const getStorageUsage = () => {
  try {
    if (process.platform === 'win32') {
      const output = execSync('fsutil volume diskfree c:', { encoding: 'utf8' });
      const lines = output.trim().split('\n');
      const freeLine = lines[1];
      const totalLine = lines[2];
      
      if (freeLine && totalLine) {
        const freeBytes = parseInt(freeLine.match(/\d+/)?.[0] || 0);
        const totalBytes = parseInt(totalLine.match(/\d+/)?.[0] || 0);
        if (totalBytes > 0) {
          const usedBytes = totalBytes - freeBytes;
          return ((usedBytes / totalBytes) * 100).toFixed(1);
        }
      }
    } else {
      const output = execSync('df / | tail -1', { encoding: 'utf8', shell: '/bin/bash' });
      const usage = output.trim().split(/\s+/)[4].replace('%', '');
      return usage;
    }
  } catch (e) {
  }
  return 'N/A';
};

const getCommandCount = () => {
  try {
    let count = 0;
    const categoryDirs = ['utility', 'fun', 'raiding', 'management', 'ghost'];
    const commandsDir = path.join(__dirname, '..', '..');
    
    categoryDirs.forEach(category => {
      const categoryPath = path.join(commandsDir, 'commands', category);
      if (fs.existsSync(categoryPath)) {
        const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.js'));
        count += files.length;
      }
    });
    
    return count;
  } catch (e) {
    return 0;
  }
};

const formatUptime = (seconds) => {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (days > 0) return `${days}d ${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h ${minutes}m ${secs}s`;
  return `${minutes}m ${secs}s`;
};
