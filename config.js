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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_30_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI0LFxuICAgICAgICA2NixcbiAgICAgICAgMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkxLFxuICAgICAgICA4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjExLFxuICAgICAgICAzNSxcbiAgICAgICAgOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibkRtZXVQb3NDLzU4bEN3cEtueW1rMkV5cHpldVBHTk9ZcUhyRFcycEx5QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNTdmV0IySE5TVjZVWDM4aUpZTG15QVwiLFxuICBcInBob25lSWRcIjogXCJhN2EwOTZiZi1iN2Q2LTRkOTMtYWJjNy00MzBlNGQ0NTg3Y2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAxMzUsXG4gICAgICA0OCxcbiAgICAgIDMxLFxuICAgICAgMTY0LFxuICAgICAgMTU1LFxuICAgICAgMjksXG4gICAgICAxODQsXG4gICAgICAyMCxcbiAgICAgIDI5LFxuICAgICAgMTY2LFxuICAgICAgMTU0LFxuICAgICAgMzgsXG4gICAgICAyOCxcbiAgICAgIDEyMyxcbiAgICAgIDE0MyxcbiAgICAgIDIzLFxuICAgICAgMjE3LFxuICAgICAgMzgsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDksXG4gICAgICAyMzQsXG4gICAgICA5NyxcbiAgICAgIDE5NyxcbiAgICAgIDE2LFxuICAgICAgMjU1LFxuICAgICAgMjMzLFxuICAgICAgMjE3LFxuICAgICAgNjMsXG4gICAgICAyMzEsXG4gICAgICAyNDksXG4gICAgICA2MSxcbiAgICAgIDExMixcbiAgICAgIDEzMCxcbiAgICAgIDc3LFxuICAgICAgMTUyLFxuICAgICAgOTEsXG4gICAgICAxOTcsXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOdTNwZklHRU1PWGtjUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtySk8zYkl6SjVCTkgwMHdOME14ZFRrZmRYck9jaGk5VitSK3RjSkUzemc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY3o1b0cvNUo0alhVajV6ZlNsK1lrZ21OWDhFT2Vkc2VNTTlwT0hvYnBRRm9pbHBaQzZqbGFiMkFaNGU5a1JlalBWMHhpSUUxZ1MvQ0lSSm8rTkJMQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSmtoVXNqZnZQWldVWWZ6OHV6cmRRVDVucGRGUWkxMHRvMlk5U01STzVZZkVPRzdiSlBxRHZ2UTlXTE5ZZDliUW54MHFnZ21zRVdSVXo5SCs4QzZOanc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTQwNDc0Njc6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MDE1NjgyMTQxODAxMzo1NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxNDA0NzQ2Nzo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUzNTAwNjE0XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🍃ضــّــــــدی مـــلک⁰¹²🍃
🍫 03247116683 🍫",
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
