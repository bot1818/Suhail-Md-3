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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_21_09_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0LFxuICAgICAgICA3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc2LFxuICAgICAgICA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM3LFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDc0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNyxcbiAgICAgICAgNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiKzRSZmNYSXhVMXY1cjkwMG9HSzZSOW5mcXU0U0hIMVBVNHkyS2p1SFk1RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MTQwNDc0NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc1Q0E4RkFBQ0YwN0I4NDk3MUIxQzAyQ0YxMEI1MjlFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1NzA3ODQ4OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZOFRObTVtVVFFMkxyZjVoYzBscW9nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjljZjY1YTc3LWU5MjctNGI5Yi1iNzBkLWM5MDQxNmNkZDZkZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzcsXG4gICAgICA0MixcbiAgICAgIDE1NixcbiAgICAgIDI0NixcbiAgICAgIDE3MixcbiAgICAgIDc5LFxuICAgICAgMjIyLFxuICAgICAgMCxcbiAgICAgIDIwNyxcbiAgICAgIDE2NixcbiAgICAgIDIxOSxcbiAgICAgIDI0LFxuICAgICAgMTIyLFxuICAgICAgMTI1LFxuICAgICAgMTk2LFxuICAgICAgMixcbiAgICAgIDIyNixcbiAgICAgIDIyOCxcbiAgICAgIDE3OSxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICAyMTksXG4gICAgICAxOCxcbiAgICAgIDQ2LFxuICAgICAgMjAwLFxuICAgICAgMTM4LFxuICAgICAgMjEsXG4gICAgICAyMTAsXG4gICAgICA3OSxcbiAgICAgIDQwLFxuICAgICAgNSxcbiAgICAgIDk3LFxuICAgICAgMTEyLFxuICAgICAgMTU3LFxuICAgICAgNzIsXG4gICAgICAyMDIsXG4gICAgICAxNTcsXG4gICAgICAyMzAsXG4gICAgICAyMzMsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08rM3BmSUdFTS9INjhVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3JKTzNiSXpKNUJOSDAwd04wTXhkVGtmZFhyT2NoaTlWK1IrdGNKRTN6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHS2xOS2dKSlMyUFc2SUNJempYcGcydVNrTEtEZjFwMUNIYmYvS2YyR0wrMnBBa1pQdGhkRTAvMFJBZnFucDBzN0pHTXBRZzdyanp0ajMxZDVwUDNDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTZWhxOCtwRFh0WXo1SW9zbnZxaGNod3BkYXlNZmtpaGRPVHJLM2ZPZ3hqODl1eFBoUHM0RlV0SmdRVlpCWnpXR1p5VUM5YUlkRzQ4L3VSZHhCeStqUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxNDA0NzQ2Nzo3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUwMTU2ODIxNDE4MDEzOjcxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE0MDQ3NDY3OjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTcwNzg0ODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHL2hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdfX2guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRUVBGSS9WVWpTZnNUOU1KWGN1VndNQ1FESmlkN1oxSnN0aGdlMlhUa0Q4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NTAzMDE0MjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1NzA3ODQxMjczN1wifSIKfQ=="  // PUT your SESSION_ID 


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










