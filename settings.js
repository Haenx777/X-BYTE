const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid00wdDJnRkNjR2N3b0xLUjUwWmJ0ZDB2emdmYkxhdnVMd3ZnWjRsUmxrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMktvME1ESGlmSDFBcmFQc1NUeFV3UnVMeG9qTlZDRy96K0pFRjVTVHhtWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQnZXM0h3R1o4NHlTMitnQlQxZzZhM2lOMjRuT3hOSjZNcGp6NWZ2ZldvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYS3JkcW1tNXZMSUd3S1FtL3dlUUVkajEwR1orWmFBMnpPVjVucWNiL0dVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdFMGF2M2dzaC8wRTFBRDRYNUFTUk9WdFZiNDJ3QXFRc0VPdjJxdm9PVjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIySDhzQmwzelpTblo4aHFUTC9vQTA1ZGtINHViR1VOV04wTVRHVFRUMzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZiNHRxc0U2SVRkWTRLcnVicTlocFpGWldrZ1dqUFkrUi9zempNcjZYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlBjd2dTRXRpaDBmRjFET1diRlY5VGw0NFppZXQ2OU1ITm5rQzNWZ2tuZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRiOGs3eFNNbHZlS0lkY3R5TnAxcXF4d1QvcGF6MUtuNnRpNkU1a3JRbE85NjRHUGZaUTdPU3NFajMrZGJ3UlE0ZkQxWXBCbnhybXZkUFpXYkNEaGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMwLCJhZHZTZWNyZXRLZXkiOiJ3RTlTak4wMVpTM2xBMkNGWHkxaTViUURrMzB6VHBKY3J2S0V2b3FQQVJjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTU1MTkxOTM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgwQUVGNDlBNTZCOUUxQTlBRkY2QjBFMDUzNUVEQzBBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg2NDUyNDF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTU1MTkxOTM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg3MkZGNjE2NTAxRDAyNkEwRDFBM0E3MDUwOTk0MDREIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg2NDUyNDN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlHckxmVXJlUmY2RTVFMVFhWUpLUEEiLCJwaG9uZUlkIjoiYWIzY2I0NGItNGJkMy00YjZlLWFmYjEtOTRhNmRjYzUyYzVjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllvT0ZHQWRjOTlrVzBxNm5SU3VScFVyN3JMWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQTm9jOW5CVWFpNVhKVmlEQmVoanIrTEJNRFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN1Y2ODdDRU4iLCJtZSI6eyJpZCI6IjUwOTU1MTkxOTM3OjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IsSGxZjGl8akxZ5f0JbigqzFmNCW4oKsxZ5f8J2QjPCdkJJf8J2fj/Cdn5EifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ozeXdmVURFT2lRcExnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InkweFdpZnpDdXE3dVBBUFVlL3NZd2RWY0tmUW4rR2pvVDFFNmJzMlVrWDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6InVVcllERXFrZS9vVCtzYlFkaEF6cHY0YmJlaHVOaUIrdSszUHRxS29UMjlmUit6K2RMY2JqUkwraXRFNDA0MmZRV2ZPbHA1WHpTL21xQkp5NXk1akJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqaE9nWDhYd1VMY3V4bWcxZDdrMk4xeHFzOEtmZ2pRVTlzVWVQMWJoSko0eEt2SWN0eVBWdTV0aVlWRDd5QTI5TVdlVnhCUXVIZExKVUMxMUhoUzNodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTU1MTkxOTM3OjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN0TVZvbjh3cnF1N2p3RDFIdjdHTUhWWENuMEovaG82RTlST203TmxKRisifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjg2NDUyMzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTit2In0=' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '50940141783' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'true' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || 'xHaen its alive'  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? 'gt manmanw chen' : process.env.DELETEMSGSENDTO,
  
};
