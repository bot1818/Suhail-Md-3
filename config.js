const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923414047467";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_59_08_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzLFxuICAgICAgICA1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg2LFxuICAgICAgICA0MCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDg4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMixcbiAgICAgICAgNyxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJycWI4Rnk2YTIwaVVOL0plS0VLL3B6d0dLbC91ZjcweElidmJ0bXIzS3JnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMczl1Sk9tUFNhR0tLY2ZlUC1rSGlBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ2NTAwNjdmLTM2YmItNDRiMy1hZjI1LTc4ZTJlYTY3NWQxYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDk0LFxuICAgICAgNyxcbiAgICAgIDIsXG4gICAgICAxODAsXG4gICAgICAxMjIsXG4gICAgICA1MSxcbiAgICAgIDExMSxcbiAgICAgIDIxOSxcbiAgICAgIDEyMyxcbiAgICAgIDU2LFxuICAgICAgODYsXG4gICAgICA1NSxcbiAgICAgIDI0OCxcbiAgICAgIDEyLFxuICAgICAgMTk3LFxuICAgICAgMjAyLFxuICAgICAgMTc3LFxuICAgICAgMjQ3LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDIxMCxcbiAgICAgIDE0OSxcbiAgICAgIDI1MixcbiAgICAgIDY5LFxuICAgICAgMTk4LFxuICAgICAgNyxcbiAgICAgIDMwLFxuICAgICAgMTUyLFxuICAgICAgOTMsXG4gICAgICA3MyxcbiAgICAgIDI0NyxcbiAgICAgIDgyLFxuICAgICAgNzQsXG4gICAgICAxNTMsXG4gICAgICA0OCxcbiAgICAgIDE1LFxuICAgICAgOTQsXG4gICAgICAxNjksXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09pM3BmSUdFSmkzOE1RR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3JKTzNiSXpKNUJOSDAwd04wTXhkVGtmZFhyT2NoaTlWK1IrdGNKRTN6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmeDh1T21RSHZvTjVvYVZwcWc3NDRaamdRUDMzb1ZpUk5ZN1pJVUFUMndITDJUTmIwd1BkcmJCTzEvQXpCemdXVjJFUlg4cnZ2YmVwRnpYdnVnVWZEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwMFY5N1poM2JmRTVPRTI3bTl6K0pFUzBEcDZJQ2RMbWdaMzNndFlRZ1lhd1VXRVlhVmg0TWJVa3pLS2tsVW9EZzNWMDY4Q2tkRElJZGlaaHFpeW9oZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxNDA0NzQ2Nzo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUwMTU2ODIxNDE4MDEzOjY0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE0MDQ3NDY3OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTUwNjExNDdcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🍃ضــّــــــدی مـــلک⁰¹²🍃.                                                   🍫 03247116683 🍫",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",




