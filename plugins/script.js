/*created by ch4mi boy 🕵
contact dev1 94703973470♻️
contact dev2 94723737086 ♻️
© Copy coder alert ⚠
*/





const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *CH4MI BOY*

> *CH4MI_MD-V1 REPO:*
*|* *https://github.com/ch4mi-boy/CH4MI-MD*

> *SUPPORT GROUP:*
*|* *https://chat.whatsapp.com/BkLuob69UKbBzh1fb1IYtO*
*╰──────────────●●►*

> *CREATED BY CH4MI BOY*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363374982050013@newsletter',
      newsletterName: "ᴄʜ4ᴍɪ ᴄʜᴀɴɴᴇʟ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'ᴄʜ4ᴍɪ_Mᴅ-V1',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/ch4mi-boy/CH4MI-MD" ,
thumbnailUrl: "https://i.ibb.co/xXZZQrk/a0cbc8b9a3873386.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
