const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KU9UEarA#rTcBMFvo_vJBFavRMDInnXWjsNa0n7_aYzp9X6j9FCI",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/xXZZQrk/a0cbc8b9a3873386.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "📍│hey i'am alive now...💗💐


📍│ᴄʜ4ᴍɪ | ᴍᴅ 🐭🩵
━━━━━━━━━━━━━━━━━━━━━━━━
> 📍│ᴏᴡɴᴇʀ :- ᴄʜᴀᴍɪɴᴅᴜ ʟᴀᴋꜱʜᴀɴ

> 📍│ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ :- 94703973470

> 📍│ꜰᴏʀᴍ :- ʙᴀʟᴀɴɢᴏᴅᴀ

━━━━━━━━━━━━━━━━━━━━━━━━
🧸⃕͜⃝🔥⃞̶͟͞♥️ ||𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧|| ♥️̶͟͞⃞🔥⃝⃕͜🧸
━━━━━━━━━━━━━━━━━━━━━━━━
> 📍ʙᴏᴛ ᴏɴʟɪɴᴇ│ (.alive)
> 📍ᴅᴏᴡɴʟᴏᴅ ᴍᴇɴᴜ│ (.menu)
> 📍ᴍᴘ3 ꜱᴏɴɢ│ (.song)
> 📍ᴍᴘ4 ᴠɪᴅᴇᴏ│ (.video)
> 📍ꜰᴀᴄᴇʙᴏᴏᴋ ᴠɪᴅᴇᴏ│ (.fb linke)
> 📍ᴛɪᴋ ᴛᴏᴋ ᴠɪᴅᴇᴏ│ (.TikTok linke)
> 📍ɢᴏᴏɢʟᴇ ᴘʜᴏᴛᴏ│ (.img)
━━━━━━━━━━━━━━━━━━━━━━━━
📍🫀⃞ᴄʜ4ᴍɪ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ⃞🫀📍
━━━━━━━━━━━━━━━━━━━━━━━━
> Give your love to someone who appreciates it 🧠
━━━━━━━━━━━━━━━━━━━━━━━━
🧸⃕͜⃝🔥⃞̶͟͞♥️||𝗪𝗔𝗜𝗧𝗜𝗡𝗚 𝗙𝗢𝗥 𝗬𝗢𝗨||♥️̶͟͞⃞🔥⃝⃕͜🧸
━━━━━━━━━━━━━━━━━━━━━━━━

> Follow Us - https://whatsapp.com/channel/0029Vazgd9F6WaKffmdKQH2A\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜ4ᴍɪ ᴍᴅ",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "➺『𝗖𝗛4𝗠𝗜 𝗠𝗗 𝗩1』࿐",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
