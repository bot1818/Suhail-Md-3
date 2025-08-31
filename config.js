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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_05_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMixcbiAgICAgICAgODksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU2LFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMSxcbiAgICAgICAgOTksXG4gICAgICAgIDY5LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQwLFxuICAgICAgICA5NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY1LFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI3LFxuICAgICAgICA2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidDVpYTlkVXhOZzVNTW9yM25Vd1NFYUZwNTcrR3VsNWUrVTdqOFkzYlg5ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidU5pZE5FbjJSNGVLZmRBVGdBM2JBZ1wiLFxuICBcInBob25lSWRcIjogXCIxYjQ2ZDJkZi03NmM3LTRhNmUtODAwOS0wYTRmZGIwNGM0YThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgNTksXG4gICAgICA1OSxcbiAgICAgIDIwMCxcbiAgICAgIDE2MyxcbiAgICAgIDQsXG4gICAgICA4NixcbiAgICAgIDE3MixcbiAgICAgIDE1NCxcbiAgICAgIDU2LFxuICAgICAgMjE3LFxuICAgICAgMjQwLFxuICAgICAgMTEzLFxuICAgICAgMTA5LFxuICAgICAgMTM3LFxuICAgICAgNDAsXG4gICAgICAxNDYsXG4gICAgICAxMjYsXG4gICAgICAxMzEsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgNzMsXG4gICAgICAzNCxcbiAgICAgIDExMSxcbiAgICAgIDMzLFxuICAgICAgMjQsXG4gICAgICAxOTcsXG4gICAgICAyMTIsXG4gICAgICAyMDAsXG4gICAgICAyNDMsXG4gICAgICAyMzUsXG4gICAgICAxNDksXG4gICAgICAxMyxcbiAgICAgIDIwMixcbiAgICAgIDIzNCxcbiAgICAgIDE3NSxcbiAgICAgIDEwMCxcbiAgICAgIDEyMCxcbiAgICAgIDEzMSxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3UzcGZJR0VQbjN6c1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrckpPM2JJeko1Qk5IMDB3TjBNeGRUa2ZkWHJPY2hpOVYrUit0Y0pFM3pnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBVRDh1MVhXalRsblFmdnpTWml3aXVyTUNzdmlhQ3lSdDlTaUhDNEVIMnRoWmVSUjJ4bCtRclZPbGtzQVVpY1d2RndwN0E4TVZBdmRaZmFNSHAxL0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjd1Y2JRVEdIWktCRWhHZzdjREJmWFBETWFNcjdTTk1CSzZNajFady9RVHlERHBFMnluNXZBMGpNWWk5bGJEZldUN05LRTlkK3NuZEo3dG5veHc1NkRBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE0MDQ3NDY3OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTAxNTY4MjE0MTgwMTM6NjdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTQwNDc0Njc6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NjYwOTUzM1xufSIKfQ=="  // PUT your SESSION_ID 


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







