//												© KhaelSan - © AtenaBot													  \\
global.owner = ['082253970822'] // Put your number here
global.mods = [] // Want some help?

global.prems = ['6289602215868']
							
global.linkGC = [
							'https://chat.whatsapp.com/CWYh0K5deYBErQ1UGsQsBv',
							'https://chat.whatsapp.com/DFPSRRwVwnA0T49iyC89Ex',
							'https://chat.whatsapp.com/JGZe3WrTf3nKfWlHeJMEOd'
							]
							
global.APIs = { // API Prefix
  // name: 'https://website'
  hanzz: 'https://hanzzganz.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  janbot: 'https://janbot-api.herokuapp.com',
  dap: 'https://api.dapuhy.ga',
  jojo: 'https://docs-jojoapi.herokuapp.com',
  djojo: 'https://docs-jojo.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://hanzzganz.herokuapp.com': 'HanzzGanz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'NgentotRusa',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'ShiroNeko',
  'https://pencarikode.xyz': 'APIKEY',
  'https://fxc7-api.herokuapp.com': 'fxc7COOL',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://api.dapuhy.ga': 'Kontolodon',
  'https://docs-jojoapi.herokuapp.com': 'Syaa'
}

// Sticker WM
global.packname = ''
global.author = '𝗙𝗼𝗹𝗹𝗼𝘄 𝗜𝗚\n• @ningenkankei.id\n• @khaelll._'
//global.packname = '© Atena Bot\nwa.me/628114811363\n\n\n𝚋𝚢 𝙺𝚑𝚊𝚎𝚕𝚂𝚊𝚗\n\n\nFollow IG: @khaelll._'
//global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nn'
//global.packname = ''
//global.author = '© Atena Bot\nwa.me/628114811363\n┏┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n┇\n┇					Ⓢⓐⓞⓣⓞⓜⓔ\n┇							Ⓐⓣⓔⓝⓐ\n┇\n┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\nғᴏʟʟᴏᴡ ɪɢ ᴏᴡɴᴇʀ: @ᴋʜᴀᴇʟʟʟ._\n𝚋𝚢 𝙺𝚑𝚊𝚎𝚕𝚂𝚊𝚗\n'

// msg
global.wait = '```Tunggu sebentar yah adick² ```'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *.enable rpg* untuk menggunakan fitur ini'
global.nsfw = 'Fitur NSFW Dimatikan!\nKetik *.enable nsfw* untuk mangkatifkan fitur ini'
global.eror = '```Mungkin sedang error atau dalam perbaikan```'
global.watermark = '© FOMEXX'

global.imagebot = 'https://telegra.ph/file/e68a450e444d875bc15f8.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 99999

//*****************PEMBATAS*********************\\
// DON'T CHANGE OR REMOVE!, IF ERROR DON'T ASK ME!

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})