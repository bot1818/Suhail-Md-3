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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_02_08_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYzLFxuICAgICAgICA2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNixcbiAgICAgICAgMTMxLFxuICAgICAgICA3NixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY5LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA1NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY0LFxuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNixcbiAgICAgICAgMTkwLFxuICAgICAgICA5OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg4LFxuICAgICAgICA3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTU1lSUdXaERXbk1oUXNGZDRRV2kvVTY2TWpZVVNKcVVkTDZWOCsrVmQ4WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT25vbzh1bm9SSlNjT1gycElTbWc1d1wiLFxuICBcInBob25lSWRcIjogXCIzZjA3MTE5Mi04NTMwLTRhNjctYTQ4ZS0yZWMzZTIyZDkxODRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgMTE0LFxuICAgICAgMzYsXG4gICAgICAyMDYsXG4gICAgICAyNDAsXG4gICAgICA3MyxcbiAgICAgIDIyNCxcbiAgICAgIDEsXG4gICAgICA4NCxcbiAgICAgIDIzNyxcbiAgICAgIDE0MyxcbiAgICAgIDkzLFxuICAgICAgMTYxLFxuICAgICAgMjQ4LFxuICAgICAgMTE4LFxuICAgICAgMjA1LFxuICAgICAgMjM5LFxuICAgICAgOSxcbiAgICAgIDE2NCxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDUsXG4gICAgICAxMTUsXG4gICAgICAxNyxcbiAgICAgIDEyMyxcbiAgICAgIDE1OCxcbiAgICAgIDY0LFxuICAgICAgNjgsXG4gICAgICAxMixcbiAgICAgIDcwLFxuICAgICAgNDUsXG4gICAgICAzNSxcbiAgICAgIDE4MixcbiAgICAgIDEsXG4gICAgICAyMTUsXG4gICAgICAxNDMsXG4gICAgICA1MSxcbiAgICAgIDEyNCxcbiAgICAgIDk5LFxuICAgICAgODMsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbTNwZklHRUwyb2hjVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtySk8zYkl6SjVCTkgwMHdOME14ZFRrZmRYck9jaGk5VitSK3RjSkUzemc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVm5NR0VBSmRPaUN6UXcveFRFMlNYeU5pdjcvZjkwNE1xeHdkTEozSE03UTJ1UXhabFpobSthbzRwcnFnZmdBTEpvOHFOaFhXWW9FRExXTDVNQ1h0QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWXdNK3ZBZHlnUVRQTTcxM0o0STdJaDdIWlZoVk9UdlQrRFJkZi9zRnBBc0EyREE2NkhWekN0bHQzT0EwK3NOS3hzMU9ITStOb1RwZ09ESjhZRkFaQmc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTQwNDc0Njc6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MDE1NjgyMTQxODAxMzo2NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxNDA0NzQ2Nzo2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU1NDAzMzI5XG59Igp9"  // PUT your SESSION_ID 


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





