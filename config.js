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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_20_09_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDMwLFxuICAgICAgICA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODksXG4gICAgICAgIDczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NixcbiAgICAgICAgODMsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkxLFxuICAgICAgICA4OSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NixcbiAgICAgICAgMjI5LFxuICAgICAgICA1OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMixcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkc0MDVRdTJPNUJOeVIwNllZVjdFR1pkVURPWVV4QStuUk41WElkMG1GYlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQwNjE0MTg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQzA1QTRCQkIzMTUxQjM4MEI3NUY0M0M0NjEzQzQ2N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTg5NDMyNDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDA2MTQxODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFDMDI1NjQzN0RBMDg0NTUwMkUzMkJBNjEzMTkzODdEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1ODk0MzI0M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiSTdjS29MblQyeTlvZVJxUlAyLVh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjM4MzM0MGMwLTYwOGMtNGE1NC1iYTY1LTE4YWVhYjM3MWQxYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICA3MCxcbiAgICAgIDM0LFxuICAgICAgNTYsXG4gICAgICA1MyxcbiAgICAgIDI0NyxcbiAgICAgIDE5NyxcbiAgICAgIDE2OSxcbiAgICAgIDUwLFxuICAgICAgMjEzLFxuICAgICAgMjQ2LFxuICAgICAgMTgxLFxuICAgICAgMzEsXG4gICAgICA3MCxcbiAgICAgIDk5LFxuICAgICAgMjE5LFxuICAgICAgNixcbiAgICAgIDIzLFxuICAgICAgMTM1LFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICA2OSxcbiAgICAgIDM1LFxuICAgICAgMTgzLFxuICAgICAgOTQsXG4gICAgICAxNjUsXG4gICAgICAxMixcbiAgICAgIDQxLFxuICAgICAgMjAwLFxuICAgICAgMTY4LFxuICAgICAgNixcbiAgICAgIDIzNyxcbiAgICAgIDY5LFxuICAgICAgMTAxLFxuICAgICAgMzIsXG4gICAgICAxODksXG4gICAgICAxMDYsXG4gICAgICAyNDksXG4gICAgICAzNixcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x5eDYvVUhFSUt3M2NZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV3lWdlVJN3B6OGhRcmZsUUpNcTVuZldjSmVicmxtTys2RStnaXdIdUZRST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBOEJGRDdBVnlnVmJmc3RVVHdyL3ZxcERmL0d6YkNVakxqOHlFZWVxeXg5bzdxV0JTRnpWenF1blZSNlkvNnV2NUk2Q1JBcXE0REVYTkdYT3dTMU5EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKR0drMDJsRGxBT3NJN3NFZW5XMHk2TWxacXFTb2lUYmZNQVovRDB3Y1YvU1V4VXNBMjRtMlA5dGc1Q0NDQjRRQ21RRmMybmx1ZTVsZSt5TFoyYXFnQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MDYxNDE4OTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NTI1NDA0MjE1MzAwMDozQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwNjE0MTg5OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU4OTQzMjM4XG59Igp9"  // PUT your SESSION_ID 


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

















