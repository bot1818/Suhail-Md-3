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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_46_09_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDYyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDg0LFxuICAgICAgICA0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNzgsXG4gICAgICAgIDY2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgyLFxuICAgICAgICAzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgODAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic2tmSGtlMFNSZjJxSkZzczY4cndleXFPM0NuQit5RFUzWFlvbnpkN2Jxaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNVBsTE1pbmdUQ3VkbnhuUVc1Y082Z1wiLFxuICBcInBob25lSWRcIjogXCI2NjViYWI4Mi1lMThhLTQxYTgtOTBiOC1lYzEyNTdiMTIyNzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICAxNDAsXG4gICAgICAzNSxcbiAgICAgIDUwLFxuICAgICAgMTQ5LFxuICAgICAgMjE1LFxuICAgICAgNjUsXG4gICAgICAzNCxcbiAgICAgIDcsXG4gICAgICA2MyxcbiAgICAgIDExOCxcbiAgICAgIDE2MixcbiAgICAgIDcyLFxuICAgICAgMTc4LFxuICAgICAgMjA2LFxuICAgICAgMjEsXG4gICAgICAxOTYsXG4gICAgICAyMzcsXG4gICAgICAyNDEsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICAyNDMsXG4gICAgICAzNSxcbiAgICAgIDc4LFxuICAgICAgMzAsXG4gICAgICAyMDAsXG4gICAgICA4OCxcbiAgICAgIDE5OCxcbiAgICAgIDUyLFxuICAgICAgMjIsXG4gICAgICAyNTIsXG4gICAgICAxMzUsXG4gICAgICAyMTUsXG4gICAgICAyNDgsXG4gICAgICA1OSxcbiAgICAgIDExMCxcbiAgICAgIDE5LFxuICAgICAgMTQ4LFxuICAgICAgMTM1LFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFczcGZJR0VOS1lpc1lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrckpPM2JJeko1Qk5IMDB3TjBNeGRUa2ZkWHJPY2hpOVYrUit0Y0pFM3pnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBXcWVCcjBCTkR6Y0tFb0lZRzBoTVdFalpScFRCU1RYcXpEeUdTVWMrT0R4KzFUOHdKMTJJTVdQL3VVSkVxREZjVmwyc0NsRFdvZVBiVE9ROVhMMkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtSU2lVSll1czRHSS9rd1hGSytlQ25TSFdiUXQ0REI1REprTjNCVVhoSDBiZmw5V0lxRVg2Mk5GVDFwcnY0MVh4alhUNnpQZmZhZXZoaHZpakxMUmd3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE0MDQ3NDY3Ojc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTAxNTY4MjE0MTgwMTM6NzZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTQwNDc0Njc6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NzU4MDM3NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdzR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3NHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL1BETEN4OXBYbGZQSDlGeUg4ZFBWMlBJckZUeTZsQXRmOTg5dkE1cWlCMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODUwMzAxNDI4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTc1ODAzMzM1OTlcIn0iCn0="  // PUT your SESSION_ID 


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













