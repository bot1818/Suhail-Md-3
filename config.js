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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_31_09_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTgsXG4gICAgICAgIDMzLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgNixcbiAgICAgICAgMTIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTU4LFxuICAgICAgICA4LFxuICAgICAgICAzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU1LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQyLFxuICAgICAgICA1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieW81enVvY1dBWHB4UFJaSElxUEd1blRkTW1iNm9aV0UyOXJML2MyZm84ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MTQwNDc0NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEyQTFENTAyMTEwQTg4MkNBREQyNTg3QTAzNEE2OUE3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1NzA3OTA4M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2Wmh6SWtpZlNXT3ZwN1A5dGxBTFlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY3YmQ4YWUyLWE5MmItNDJhOC1hNjMyLTFjNDliOTIwYmJmMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICAyMDEsXG4gICAgICAxMixcbiAgICAgIDIzMCxcbiAgICAgIDgyLFxuICAgICAgMTcyLFxuICAgICAgODIsXG4gICAgICAxMCxcbiAgICAgIDEsXG4gICAgICA4NixcbiAgICAgIDE4MyxcbiAgICAgIDIyNixcbiAgICAgIDIwNCxcbiAgICAgIDEwMyxcbiAgICAgIDI0NCxcbiAgICAgIDY1LFxuICAgICAgMTk3LFxuICAgICAgMTc5LFxuICAgICAgMjI2LFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDE0NCxcbiAgICAgIDExNCxcbiAgICAgIDIzNSxcbiAgICAgIDE4MixcbiAgICAgIDE3MyxcbiAgICAgIDk3LFxuICAgICAgMTIyLFxuICAgICAgNTIsXG4gICAgICAxMzcsXG4gICAgICA4OSxcbiAgICAgIDIyNSxcbiAgICAgIDIzNCxcbiAgICAgIDksXG4gICAgICAyMjEsXG4gICAgICAxNjQsXG4gICAgICAyNDgsXG4gICAgICAxNjQsXG4gICAgICA5MCxcbiAgICAgIDg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEczcGZJR0VLRE02OFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrckpPM2JJeko1Qk5IMDB3TjBNeGRUa2ZkWHJPY2hpOVYrUit0Y0pFM3pnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBTRlZ6M1ZQZVl3Rkg4M2V1RGpMOUpCb2w2dDZMc3RYTmxra0xyeE5leVA0VkN6cUx2UG04R08rR2orNk5CUWhrb3VrMUY1ZmVtdnpuNCtYSFUwV0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhCUWdueHBRWENVc1FCVndXSEt3Wm10YXpjNUlqWGFla1Q2ZFk4TFluWkd1ZVU4MHVhbk9vWU55bTBvTWF1ZS9JbVdPNkJhcjc0QUQ3andYak1CZWdBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE0MDQ3NDY3OjcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTAxNTY4MjE0MTgwMTM6NzJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTQwNDc0Njc6NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NzA3OTA3NlxufSIKfQ=="  // PUT your SESSION_ID 


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











