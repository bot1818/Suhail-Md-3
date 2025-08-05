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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_46_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTczLFxuICAgICAgICA2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDUsXG4gICAgICAgIDMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzksXG4gICAgICAgIDE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNixcbiAgICAgICAgODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgzLFxuICAgICAgICA5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIsXG4gICAgICAgIDk1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDYzLFxuICAgICAgICAxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDcwLFxuICAgICAgICA3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDI3LFxuICAgICAgICA3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDM2LFxuICAgICAgICA1MixcbiAgICAgICAgMjI2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVFFjZFdvQldETFdxR2RwRkJMNll2QXNlQkxLVnVSVmJURzBrdVFNTUMxOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia29MMU90a2ZTd0d0Zk4yQnc3TFNRQVwiLFxuICBcInBob25lSWRcIjogXCJkN2IxZDAyMy1lYTQ3LTRmNzMtYjM5MS1jOTVlNDExNTA3NGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgMTE2LFxuICAgICAgMTAxLFxuICAgICAgMTgxLFxuICAgICAgMTYsXG4gICAgICAxNzQsXG4gICAgICAxMDMsXG4gICAgICAzNixcbiAgICAgIDIyOCxcbiAgICAgIDExMixcbiAgICAgIDIwNSxcbiAgICAgIDE2MyxcbiAgICAgIDE3MyxcbiAgICAgIDEwLFxuICAgICAgMjQ3LFxuICAgICAgMTE3LFxuICAgICAgNjEsXG4gICAgICAyMTEsXG4gICAgICAyMjAsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDgsXG4gICAgICA1OSxcbiAgICAgIDkzLFxuICAgICAgNDQsXG4gICAgICA3NixcbiAgICAgIDIyNyxcbiAgICAgIDIwNixcbiAgICAgIDIyMixcbiAgICAgIDE0OCxcbiAgICAgIDIwLFxuICAgICAgMTk2LFxuICAgICAgNDcsXG4gICAgICAyMTEsXG4gICAgICA0NixcbiAgICAgIDEzNixcbiAgICAgIDE4LFxuICAgICAgMTAsXG4gICAgICAyMzMsXG4gICAgICAyMixcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04yM3BmSUdFSlRoeGNRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3JKTzNiSXpKNUJOSDAwd04wTXhkVGtmZFhyT2NoaTlWK1IrdGNKRTN6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKRnVSVnJxYzNxS0V1YXUxSjkwN1hhb29MTHdwUGtTWXpYbzlWN3BmSzUzcGpBMlgrdDloM0RILy93K1hsR1g2RFlwTGxId0lBUi9JUUVWbHVMbFFDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzd3JDeDNTbnh1WTNTZGR6eVo5aWV2OEpvT3dmdWtJalptdldkeGl4c051dnR4V0FIRWg2R3dDQm9NNkZkbUZiNit2R0VGVE9Od3VrV3pWMEtJUm9odz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxNDA0NzQ2Nzo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUwMTU2ODIxNDE4MDEzOjU4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE0MDQ3NDY3OjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTQzNjIwMDdcbn0iCn0="  // PUT your SESSION_ID 


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

