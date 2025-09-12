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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_22_09_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxLFxuICAgICAgICAzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDksXG4gICAgICAgIDU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDMyLFxuICAgICAgICA2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1LFxuICAgICAgICA2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjExLFxuICAgICAgICA5MixcbiAgICAgICAgMTk4LFxuICAgICAgICA0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgODIsXG4gICAgICAgIDk4LFxuICAgICAgICAzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM1LFxuICAgICAgICA4NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYWkxSUGxIUEZTMXE1MjdDWHpSZGJMcldya3JraU5QZlQvSUNYY0FjNlFzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0MDYxNDE4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUMyREJCMjI0QUJBQzRFMzI5NTNEOUNCOTg5MTAxNjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU3NzAxMzU3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQwNjE0MTg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQzczRkJCRDg0Q0M4N0ZGRDQ3NjJGQ0IwRTREQzAwMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTc3MDEzNTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQUpsdktxSFVScktoZ0czZzZ0ZnN6QVwiLFxuICBcInBob25lSWRcIjogXCIzNTQ2NmIxZi1lY2FmLTRjODktYWViNi1lNGZhYTUzMmEyYTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAxOTgsXG4gICAgICA0MCxcbiAgICAgIDE5MSxcbiAgICAgIDEwMixcbiAgICAgIDY2LFxuICAgICAgNTAsXG4gICAgICAyNDYsXG4gICAgICAxOTAsXG4gICAgICA5MCxcbiAgICAgIDExNCxcbiAgICAgIDE2NixcbiAgICAgIDMwLFxuICAgICAgMjUzLFxuICAgICAgMTU1LFxuICAgICAgMTA5LFxuICAgICAgMjQ1LFxuICAgICAgMTQsXG4gICAgICAxMDQsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICAxMzIsXG4gICAgICA1NCxcbiAgICAgIDIxOCxcbiAgICAgIDIxMCxcbiAgICAgIDE1MyxcbiAgICAgIDE3NixcbiAgICAgIDE2NSxcbiAgICAgIDIxNCxcbiAgICAgIDU3LFxuICAgICAgMjAyLFxuICAgICAgMTU4LFxuICAgICAgMTk4LFxuICAgICAgMjU0LFxuICAgICAgMTM1LFxuICAgICAgMjEzLFxuICAgICAgNDAsXG4gICAgICAxNDAsXG4gICAgICAxMzcsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMcXg2L1VIRU9mSmtjWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIld5VnZVSTdwejhoUXJmbFFKTXE1bmZXY0plYnJsbU8rNkUrZ2l3SHVGUUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid3hFdjllNVkrcEwwQWZnRFEzaE5sSW5vcXVyM0J2WmFXUHA0KzlHTjBXZE9veTZvTTRiekwzTGMvS0UwV0RWRVR4VzU2SWZ3Ujl1OHBvVDVwaDJRQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibk1SWXJqdjA4cnF6aEtnQjNPcFlJR1FKeW1EYWlIeWVqcG00WVVJVzN3L1p1b0s0Mk8yUUtnRGt6ZmpYaDBoZ2lnbm5IS3g1S2dWYVZkTThrL2l3Z3c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDA2MTQxODk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjUyNTQwNDIxNTMwMDA6MUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0MDYxNDE4OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NzcwMTM1NFxufSIKfQ=="  // PUT your SESSION_ID 


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















