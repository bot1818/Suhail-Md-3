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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_44_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg4LFxuICAgICAgICA5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDUzLFxuICAgICAgICA3NixcbiAgICAgICAgMTQwLFxuICAgICAgICA4NixcbiAgICAgICAgNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0LFxuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDksXG4gICAgICAgIDMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyV1pqTmdOeTZKNzR0TDhiVmhjcDBGbDdyQ2JKenU5bzlLN05NN243MFZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjQUVrWm14MlIyU0NsM1lQVFJrUWx3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjcxNDAwMmU3LWYzYjMtNDVlZC1iNTYxLTNiNTNiM2FiYzcwNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAyNDksXG4gICAgICAyMzgsXG4gICAgICAyMzgsXG4gICAgICAyMTIsXG4gICAgICAzNCxcbiAgICAgIDE3OCxcbiAgICAgIDIzNixcbiAgICAgIDc4LFxuICAgICAgMTg4LFxuICAgICAgMjM1LFxuICAgICAgMjMzLFxuICAgICAgNjYsXG4gICAgICA2NCxcbiAgICAgIDE3NSxcbiAgICAgIDg3LFxuICAgICAgMjAwLFxuICAgICAgNDQsXG4gICAgICAyMTQsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMTcsXG4gICAgICAyMTAsXG4gICAgICAyMDQsXG4gICAgICAxNDMsXG4gICAgICAxMzQsXG4gICAgICA1OCxcbiAgICAgIDIyNyxcbiAgICAgIDE4MSxcbiAgICAgIDE0OCxcbiAgICAgIDIzNSxcbiAgICAgIDEyMSxcbiAgICAgIDEwNCxcbiAgICAgIDIwLFxuICAgICAgMTMsXG4gICAgICAxMDUsXG4gICAgICAxNTEsXG4gICAgICAyMTMsXG4gICAgICAxNSxcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09PM3BmSUdFTGZjMjhRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3JKTzNiSXpKNUJOSDAwd04wTXhkVGtmZFhyT2NoaTlWK1IrdGNKRTN6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6RllrVWFxWkV1am1wT3pXTCs2VW9nWm84TWZhYXFrOW1hTlhWTVB6TW8wVkVPenNQZitvWG1hVGNUd2JsUktDZ2M0NUcvcTVHZmNBb1NBb25VSDJEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQZVkrdjNzZUtvblRCVHB2MEQ4V2cxQXNlSm50cVZDeHZoME9PRUtJRFBzZ2M2akIyWXpZMDI0MU43ajdJc1htb0gzelg1Y0F6dWRpQm94NzkzVkJEdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxNDA0NzQ2Nzo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUwMTU2ODIxNDE4MDEzOjYzQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE0MDQ3NDY3OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTQ3MjE4NTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBd0VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF3RS5qc29uIjogIntcImtleURhdGFcIjpcIkNzSVlyTGlUYi8zK0ovbDFoRzg0YWVybG5lUDlIVDZKQ1R2VzQwNlUvN289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg1MDMwMTQxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzU0NzIxNzkzMjYyXCJ9Igp9"  // PUT your SESSION_ID 


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



