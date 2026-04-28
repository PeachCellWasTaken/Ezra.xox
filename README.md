# Ezra Discord Selfbot

A production-quality Discord selfbot with 119+ commands across 5 categories featuring colored console UI, automatic status management, and raid utilities.

## 🚀 Quick Start (3 Steps)

### 1. Install Node.js
Download from https://nodejs.org/en/ (version 20 or higher)

### 2. Configure Bot
Edit `config.json` and add your Discord token:
```json
{
  "token": "YOUR_DISCORD_TOKEN_HERE",
  "prefix": ",",
  "owner_id": "YOUR_DISCORD_ID",
  "log_level": "silent",
  "language": "es"
}
```

### 3. Run Bot
Double-click `RUNME(1).bat` to install everything and start the bot

---

## 📋 Commands (119+)

**Prefix:** `,` (comma)

### Utility (31 commands)
`ping`, `info`, `help`, `cmds`, `afk`, `stop`, `lang`, and more

### Fun (20 commands)
`mock`, `uwu`, `ascii`, `flip`, `space`, `cow`, `leet`, and more

### Raiding (48 commands)
`r4id`, `gcf`, `mb`, `spam`, and more

### Management (11 commands)
`purge`, `slow`, `nick`, `role`, `lock`, `unlock`, `nc`, `dr`, `dc`, `cc`, `rnc`

### Ghost (11 commands)
`status`, `typ`, `ar`, `snipe`, `inv`, `on`, `idle`, `dnd`, `em`, `del`, `ct`

---

## 🎨 Features

✅ Colored console UI with animated banner  
✅ Automatic Discord status management  
✅ Event logging (last 5 events displayed)  
✅ Server & friend count display  
✅ Owner-only execution  
✅ Bilingual support (Spanish/English)  
✅ AFK auto-reply on mention  
✅ Command auto-deletion  
✅ Persistent data storage  

---

## 📁 File Structure

```
selfbot/
├── index.js              Main bot file
├── config.json          Configuration
├── RUNME(1).bat         Install & run
├── RUNME(2).bat         Quick run
├── commands/
│   ├── utility/         (31 commands)
│   ├── fun/             (20 commands)
│   ├── raiding/         (48 commands)
│   ├── management/      (11 commands)
│   └── ghost/           (11 commands)
├── lang/
│   ├── es.json         Spanish translations
│   └── en.json         English translations
├── data/
│   ├── persist.json    Persistent data
│   └── HERESURSTATUS.txt Original status backup
└── scripts/
    └── apply-patch.js   Auto-patch installer
```

---

## 🔧 Configuration

### Language
Change in `config.json`:
- `"language": "es"` for Spanish
- `"language": "en"` for English

Or use command: `,lang en`

### Status
Automatically set to: `Using Ezra.xox lol || .gg/ossyra`  
Backup saved to `data/HERESURSTATUS.txt`

---

## ⚠️ Important Notes

- This is a **selfbot** - use only for your own account
- Some commands require admin permissions in the server
- Rate-limiting is built-in for raid commands
- All messages are auto-deleted for stealth
- Bot logs activity to console

---

## 🆘 Troubleshooting

**Bot won't start:**
- Make sure Node.js 20+ is installed
- Check your Discord token is valid
- Run `RUNME(1).bat` again

**Commands not working:**
- Verify prefix is `,` in config.json
- Make sure you're the owner_id in config.json
- Check console for errors

**Dependencies failing:**
- Delete `node_modules` folder
- Run `RUNME(1).bat` again

---

**Made with ❤️ for Ossyra**
