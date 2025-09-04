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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_36_09_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk2LFxuICAgICAgICA3LFxuICAgICAgICAzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI5LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNixcbiAgICAgICAgMjMwLFxuICAgICAgICA2NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2LFxuICAgICAgICAyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgODEsXG4gICAgICAgIDE3LFxuICAgICAgICA5LFxuICAgICAgICA2MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgzLFxuICAgICAgICAzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU1LFxuICAgICAgICA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOSxcbiAgICAgICAgMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9OUWxmelRwUmFaZkF1ZytlaWsvRUE3MUVEa3pjckhGYWw1Z0dsS1RYNHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjgtc0p4OWNTUTZhc3VkZ1dXSV9kdVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2Y1YWU1OTktMzNiNS00ZDVkLTllNTgtZjcxZmIxOTMyYTZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMTExLFxuICAgICAgMTkyLFxuICAgICAgMTA0LFxuICAgICAgOSxcbiAgICAgIDkxLFxuICAgICAgODIsXG4gICAgICAxNDEsXG4gICAgICAxNjQsXG4gICAgICAxNDAsXG4gICAgICAxNDksXG4gICAgICAxNjQsXG4gICAgICAxMzAsXG4gICAgICAxOTMsXG4gICAgICA4OSxcbiAgICAgIDI0NSxcbiAgICAgIDIxMyxcbiAgICAgIDIwOSxcbiAgICAgIDIwNSxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDUsXG4gICAgICAxNyxcbiAgICAgIDE0OSxcbiAgICAgIDE3OSxcbiAgICAgIDE2OCxcbiAgICAgIDY1LFxuICAgICAgMjE4LFxuICAgICAgMjMyLFxuICAgICAgMTI2LFxuICAgICAgOTUsXG4gICAgICAxNzksXG4gICAgICAxOTgsXG4gICAgICAxNDUsXG4gICAgICA4LFxuICAgICAgMjEwLFxuICAgICAgNTAsXG4gICAgICAxNTYsXG4gICAgICA4MixcbiAgICAgIDE5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08yM3BmSUdFTEM3NWNVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3JKTzNiSXpKNUJOSDAwd04wTXhkVGtmZFhyT2NoaTlWK1IrdGNKRTN6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvWnlGUm5kR3FzQlRyRXJNY1JsL1AxemdmRnJOR2JNbWhhbTBqNG0ycWliQU9OWGNnd3cxbDd6UVRlbWV2T3NFQjNnYnhnU3BFS2ZiYmN6anVwR1BDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZeUM4V2RhWDdhd3RLcjhxeU1QTExLTlNHRkZrQVNuNllVczVNdzJVUTR5T3ZjcFBrM000Q015UGdGMUlmT3orS3orRDFBdnIrSVB5MCs2ZEpVZ1hBZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxNDA0NzQ2Nzo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUwMTU2ODIxNDE4MDEzOjY5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE0MDQ3NDY3OjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTY5Nzg2MTJcbn0iCn0="  // PUT your SESSION_ID 


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









