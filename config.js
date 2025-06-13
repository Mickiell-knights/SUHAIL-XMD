const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "https://github.com/Mickiell-knights/SUHAIL-XMD"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "https://cloud.mongodb.com/v2#/org/68419a5ee67cd0179828853c/projects"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "https://cloud.mongodb.com/v2#/org/68419a5ee67cd0179828853c/projects"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Accra/Ghana";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237679845694";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "online" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_08_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI5LFxuICAgICAgICA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg3LFxuICAgICAgICA1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MixcbiAgICAgICAgODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDc5LFxuICAgICAgICA1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMjMzLFxuICAgICAgICA4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk3LFxuICAgICAgICA2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDcxLFxuICAgICAgICA0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2LFxuICAgICAgICA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NixcbiAgICAgICAgNzksXG4gICAgICAgIDk3LFxuICAgICAgICA5MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NixcbiAgICAgICAgNTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEzLFxuICAgICAgICA3MixcbiAgICAgICAgMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDY4LFxuICAgICAgICA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJGbnZ4dFpUcG1nNGJtYTQ2QmprQmFXUlJlWmx5S0ZCOTA4MnJuZzRFWDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVGVGpKUl9xUWxtQ3Zfc21sRlBqWkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWI0OTY4YjktMTIzNi00MWRkLWEwYTAtOTcyMzBiMDgzZjllXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMCxcbiAgICAgIDE4NSxcbiAgICAgIDEwOCxcbiAgICAgIDEzNixcbiAgICAgIDMyLFxuICAgICAgMTMyLFxuICAgICAgNDAsXG4gICAgICA2MyxcbiAgICAgIDE0MixcbiAgICAgIDIxNixcbiAgICAgIDExMSxcbiAgICAgIDEwOSxcbiAgICAgIDEyLFxuICAgICAgNTMsXG4gICAgICAyMzEsXG4gICAgICAxMixcbiAgICAgIDQ2LFxuICAgICAgMTg0LFxuICAgICAgODEsXG4gICAgICAxMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDEyOSxcbiAgICAgIDE4MixcbiAgICAgIDgxLFxuICAgICAgMjI5LFxuICAgICAgMjIxLFxuICAgICAgNDAsXG4gICAgICAzNixcbiAgICAgIDgwLFxuICAgICAgMTEzLFxuICAgICAgOTIsXG4gICAgICAyMjMsXG4gICAgICA0MixcbiAgICAgIDI0NSxcbiAgICAgIDcyLFxuICAgICAgMTk1LFxuICAgICAgMjA0LFxuICAgICAgMjE5LFxuICAgICAgNzIsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLRElocVFHRUpYdXNjSUdHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhTakN1NWpOdnZmdXprMk4vQng1TjNmVCt3aElFdVorNi9GZEdLVE1IazQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY2trRnNOR1hZQk1ZWGo3SExJUEl1N2dXWWhvV2lRdFVVc2xXUktYY2JNckFFNnQrR01aVWpDRGhKZG9VR3c5emF0UTBOOHNxMXBoUWg2TDJmYjZiQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN3ZMdlJwRTAzaU9CT2ViYnI1M0gzejlzUUVqNCtCZjlBaWpzQnJhMGUyb21DMWNTeXVtdWYweUJLV2d6SUl2eEdoSFR2eVo3eDNUT2x4M2tvMjAxQmc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2Nzk4NDU2OTQ6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNw6/EjWvDr8OrbGwgfiBLw7HDr2dodHNcIixcbiAgICBcImxpZFwiOiBcIjYxMDM2MDk5MDIzMDY0OjE5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3Njc5ODQ1Njk0OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDk4NDE2ODlcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "MRWILL-available",
  packname: process.env.PACK_NAME || "MRWILL-available",
  botname : process.env.BOT_NAME  || "Mickiell Knights",
  ownername:process.env.OWNER_NAME|| "knights",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
