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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_49_09_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUyLFxuICAgICAgICA2MyxcbiAgICAgICAgOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNixcbiAgICAgICAgMTE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDc2LFxuICAgICAgICAxMixcbiAgICAgICAgMTcwLFxuICAgICAgICA5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTExLFxuICAgICAgICA0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDU5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDcyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDkwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgzLFxuICAgICAgICA1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNjMy9lejVEZ0xVZ0FoaWdwZzV2bWtGNlZGWjJhc2xWK1FPQjFYOE96L1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInppcWpxcmF1Uk9HdFJnRmlQWDF4eWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzQ1OWU3MDktNmFlNC00MWIwLWE3MzMtMzUxZGQ4YTMwMjBmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDE2MyxcbiAgICAgIDEyNyxcbiAgICAgIDI1LFxuICAgICAgMTU2LFxuICAgICAgMTM2LFxuICAgICAgMTk3LFxuICAgICAgNjQsXG4gICAgICA5MyxcbiAgICAgIDI0MSxcbiAgICAgIDIzNyxcbiAgICAgIDE0NSxcbiAgICAgIDIyNixcbiAgICAgIDE5MixcbiAgICAgIDI4LFxuICAgICAgMTkxLFxuICAgICAgMTE0LFxuICAgICAgMTM0LFxuICAgICAgMjA2LFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDU3LFxuICAgICAgMTgwLFxuICAgICAgMjQ0LFxuICAgICAgMTc2LFxuICAgICAgMTQ1LFxuICAgICAgMzYsXG4gICAgICAxMjcsXG4gICAgICAxMTQsXG4gICAgICAxNjYsXG4gICAgICAxMDIsXG4gICAgICA1NixcbiAgICAgIDEzNCxcbiAgICAgIDE4LFxuICAgICAgMjI5LFxuICAgICAgOTgsXG4gICAgICAxNjMsXG4gICAgICAxNjksXG4gICAgICAxMDIsXG4gICAgICAyMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYTNwZklHRUtlYWlzWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtySk8zYkl6SjVCTkgwMHdOME14ZFRrZmRYck9jaGk5VitSK3RjSkUzemc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieXpBNEJDdWtEa3hOMGw2SmI3eDJ6OEs1UmNzc1JQY2w4OUFjWXZoL2QzSm13MnJZODBndW8xS2VsdlZmSFRMTXV4NXBiNCtRK0JKbEtrdW4xZlRUREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYWpMSkRZN2JENDB5cVB4L3N5NDVNcmpNRzh5OGlLMlFRV254dktoV1d0cjBwZDNNb205Uzh4TEhGRWR2Ukk4RklkY2x4ZzhsMDVGVW4ya1IrZ0t0Q0E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTQwNDc0Njc6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MDE1NjgyMTQxODAxMzo3N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxNDA0NzQ2Nzo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU3NTgwNTg5XG59Igp9"  // PUT your SESSION_ID 


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














