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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_23_09_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzksXG4gICAgICAgIDE1LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIxLFxuICAgICAgICA5MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxLFxuICAgICAgICA1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDM2LFxuICAgICAgICA3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTExLFxuICAgICAgICA2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDkyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNixcbiAgICAgICAgNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0M2cwbzlsSzNEcEUyOHBrL2NSdlRpK0NuUWhTNTFHR2Z2SjllLzZqOHhnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpVEZBcmdmbVRQT0tGLUVPTzBQLXpRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhlNDliMTVlLTJiMGYtNDUzMi05OTc0LThiMjI5OWI3ZTJhM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICAxMzgsXG4gICAgICAyNSxcbiAgICAgIDQ3LFxuICAgICAgMTgzLFxuICAgICAgMzEsXG4gICAgICA5MyxcbiAgICAgIDk1LFxuICAgICAgMTc1LFxuICAgICAgODMsXG4gICAgICAxNTYsXG4gICAgICAyNTMsXG4gICAgICAyNDksXG4gICAgICAxMzAsXG4gICAgICAyMixcbiAgICAgIDI0OSxcbiAgICAgIDMxLFxuICAgICAgMTg2LFxuICAgICAgMzQsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMixcbiAgICAgIDEwOCxcbiAgICAgIDE0NSxcbiAgICAgIDc1LFxuICAgICAgMjI5LFxuICAgICAgNyxcbiAgICAgIDIyNCxcbiAgICAgIDI0NCxcbiAgICAgIDEzNSxcbiAgICAgIDE2MyxcbiAgICAgIDY0LFxuICAgICAgOTQsXG4gICAgICAyNDEsXG4gICAgICAxNzgsXG4gICAgICA2NCxcbiAgICAgIDg3LFxuICAgICAgMjEsXG4gICAgICAxOTQsXG4gICAgICAyMixcbiAgICAgIDIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE8zcGZJR0VJQ09pc1lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrckpPM2JJeko1Qk5IMDB3TjBNeGRUa2ZkWHJPY2hpOVYrUit0Y0pFM3pnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNXcEgwMGY5V0s1RUVRUDVGclZSRnJNUTlJTm9DaXM1ajlqemY4YithazI1UmNuOTJTTi9FcVFDTjJ6TklaK1Nxa1ZkdnpOK1VPeTlpOTZTZ0V1UEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkF2ckRuc29NelE1YWtmWVhUM25MVGJQQmxha2djZC8zQmYyUngzS3lUN0ZWWnM3anVqcFRPK3hEYjZkOFN6Y2QydnE1T3VsNUJtTkQ3eHNkOVFBNUFRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE0MDQ3NDY3Ojc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTAxNTY4MjE0MTgwMTM6NzRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTQwNDc0Njc6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NzU3OTAxMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpYK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlgrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSGhJZlk2RU1ZM3B1SWZXcXp1TGMxdkdqcjF0UWg4dW0xODY2VGRXY0Y5TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODUwMzAxNDI2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTc1Nzg5NTU3NDlcIn0iCn0="  // PUT your SESSION_ID 


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












