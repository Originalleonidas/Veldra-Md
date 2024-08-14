//ASTA
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0k3UjROOHlVcXdPR1BqaGZPMytVMDh0NXRYU29pdjJod2JxTmcvNmpWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGtIczhQcnN1RE5VeDhtL01tNUxlQVRSVUJBVDdYVGFOTUdKSktMSi9TOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTExEaVk1bkoxS1FBbmZZL0IwUSt6UnpLUmdWWm1LeHRTQWFzTUF0aUhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwOEVhRVc4T1c4enIwdHBETXNLZG1Sc0EyVjJrUVZYcU04OUs3NEJKc0Z3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlFSU5iWlY1SEdzMDFaZHlQSXpZZ1Y1SktKRzE0bWpUaEl4S1YyaFo3MzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5rNC9rT0dyZlo5RFFiT0dhNENndUpBa0ZzTExSZEJHdDJtY3ZVMUtnalE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUE2SmUrYVBUV1ZGdmtCOTBIZTVmckZ5blFyNy9neUhCWXdpMitCWWNWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BJSkRuOGNzVHJQRkozZnZNSmQ0eDBaVHR5aWU2MU5Wa05CZHpMU0luaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkN6VzZNL1BsaVh6TGlxTkxwa1dJbDZvQjVybmtjR1J0clhtV3hlczczdVo4YmkyNFpXQWFSMFc1ekRnWUVLSG9vbk1OcGduS3FXVzJtK0tjTU1RSURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzIsImFkdlNlY3JldEtleSI6IjVEVG5pYVlsSnZGbUxKYVovanFmOE93UXRqTEhBRi8zYXJHc2Q3VVJJQzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJMc0xScWdBU1RlWTVGeW5iT0ZBemciLCJwaG9uZUlkIjoiMWRmNmU1ZGMtNzRiMC00MmFhLTgyZDktYWQ3NDJjYTQzMTNkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh3MkVsZ1BzZVRpcVpEQlNXQVdleTAzaytqWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYV2hOVW5wZE9qUExjSmRZWkhlYjBwVlRRelk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSlA0WFA2UU4iLCJtZSI6eyJpZCI6IjIzNzY3MDc1MDc1MzoxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIq8J2QqPCdkKvwnZCi8J2QoPCdkKLwnZCn8J2QmvCdkKUqIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQNkoyWUlFRVB5QTlMVUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIWndzUzZIU2VaYkJsT3ZFZXhyZ2oyVFZZem9NUWhaUHBKSVhGSWZkMkRBPSIsImFjY291bnRTaWduYXR1cmUiOiJndUxSY1I5SGdqRGNhay93ZVVlQjdhUE1ISHEraGR5OWs5aEhHMjIvZEpXbVZSS3RhVWduNXdhWm9FZlRlZzZ1K0ZXeVh6WFhTNnFMbm1qYmlxaW9CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiejJrazNKaC82WHM1angzdVJhWVJJdUJkS092UTRxeXJnbVZEMkpLUXRhMHdHZmZGUDJ1cnk0Z2JyZWtucWFBaFIyTlBFcE5WbW9yVFk3cURVcHROREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NzA3NTA3NTM6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUjJjTEV1aDBubVd3WlRyeEhzYTRJOWsxV002REVJV1Q2U1NGeFNIM2RndyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzY2MjQ3NH0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "null";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1496d1ee606e8946930bd.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/a7112fe9501c0e3e44dae.jpg,https://telegra.ph/file/1496d1ee606e8946930bd.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©ᴠᴇʟᴅʀᴀ-ᴍᴅ`",
  author: process.env.PACK_AUTHER || "𝐨𝐫𝐢𝐠𝐢𝐧𝐚𝐥",
  packname: process.env.PACK_NAME || "𝐨𝐫𝐢𝐠𝐢𝐧𝐚𝐥",
  botname: process.env.BOT_NAME || "𝐨𝐫𝐢𝐠𝐢𝐧𝐚𝐥",
  ownername: process.env.OWNER_NAME || "𝐨𝐫𝐢𝐠𝐢𝐧𝐚𝐥",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Limule3650/Veldra-Md";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "237698581946";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://veldra-session.onrender.com";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
