"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "📜", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello This is  *ƊƛƖMƛ MƊ* \n\n ' + "The Following is *ƊƛƖMƛ-MƊRepo and don't forget to give a star⭐.*";
    let d = ' https://github.com/henrygokugt99/DAIMA-MD';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/46619546d00ab9c14c210.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *MEGATRON-BOT* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Damon*'
      let varmess=z+d
      var img='https://telegra.ph/file/bcf5cec3445652ab197bc.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
