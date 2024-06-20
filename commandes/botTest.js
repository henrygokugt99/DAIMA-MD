const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


zokou({ nomCom: 'test',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚀', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const { start} = new Date().getTime()
    return repondre('*𝐈'𝐦 𝐚𝐥𝐰𝐚𝐲𝐬 𝐫𝐞𝐚𝐝𝐲 𝐟𝐨𝐫 𝐚𝐜𝐭𝐢𝐨𝐧😤*\n ```' + Responding at 10 + '``` *ms*') 
    const { end } = new Date().getTime()
    await zok.sendMessage('*Pong!*\n ```' + (end - start) + '``` *ms*')
  }
)
