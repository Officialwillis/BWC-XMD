const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 


zokou({ nomCom: 'love',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '📄', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*💃🏽I choose you🥹🥹❤️. And i will choose you over and over and over. Without pause🥹❤️, without a doubt, in a heartbeat. I will keep choosing you.🥹🥹*`) 

   


  }
);


zokou({ nomCom: 'getall',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '😎', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_getting all members_*`) 

   


  }
);

zokou({ nomCom: 'go',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '📄', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*💃🏽I wish i could stay*`)
   


  }
);

zokou({ nomCom: 'channel',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🍁', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m`) 

   


  }
);
zokou({ nomCom: 'alone',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🍁', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`ʜᴇʟʟᴏ.... ɪ'ᴍ ʜᴀᴘᴘʏ ᴛᴏ sᴇᴇ ʏᴏᴜ

ᴀʟᴏɴᴇ ᴏᴡɴᴇʀ sᴀʏs ᴍᴏsᴛ ᴏғ ᴜᴘᴅᴀᴛᴇs ᴀʀᴇ ᴀʀᴏᴜɴᴅ ᴛʜᴇ ᴄᴏʀɴᴇʀ... ʏᴏᴜ ᴡɪʟʟ ᴇɴᴊᴏʏ ᴍᴏʀᴇ ᴄᴏᴍᴍᴀɴᴅs ᴀs ʜᴇ ᴀᴅᴅs ᴛʜᴇᴍ...

....ᴜsᴇ ᴍᴇ ᴄᴀʀᴇғᴜʟʟʏ 

ɪ ʟᴏᴠᴇ ʏᴏᴜ`) 

   


  }
);

zokou({ nomCom: 'channel1',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🍁', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`tap here to join my second channel https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m`) 

   


  }
);


zokou({ nomCom: 'aloo',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🤷', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_Redmi-XMD is running...... Love it_*`) 

   


  }
);


zokou({ nomCom: 'vision',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🔎', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_ᴏᴜʀ ᴍɪssɪᴏɴ ɪs ᴛᴏ ʟᴇᴛ ʏᴏᴜ ᴇɴᴊᴏʏ ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ.... ❣️ ɪ ʟᴏᴠᴇ ʏᴏᴜ _*`) 

   


  }
);


  
zokou({ nomCom: 'group1',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🤫', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`top a link to join boniphace group  https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m`) 

   


  }
)


zokou({ nomCom: 'scriptkidies',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🐅', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`top here to Alone script kiddies group https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E`) 

   


  }
)


zokou({ nomCom: 'redmiwebs',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🤷', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_YESS....I'M LISTENING TO YOU_*`) 

   


  }
);


zokou({ nomCom: 'me',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🤷', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*check the developer via https://wa.me/c/254759000340*`) 

   


  }
);


zokou({ nomCom: 'problem',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🤷', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*┏━━━━━━━━━━━━━━
┃𝐊𝐈𝐍𝐆𝐒-𝐌𝐃 🎉🎉🎉 
| NEVER 
┃DIE🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 𖥘 𝐊𝐈𝐍𝐆𝐒-𝐌𝐃 TECH 𖥘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Please Follow My Support Channel
Wanna talk to me?👉 https://wa.me/c/254759000340 👈
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
© *𝐊𝐈𝐍𝐆𝐒-𝐌𝐃 TECH*`) 

   


  }
);
