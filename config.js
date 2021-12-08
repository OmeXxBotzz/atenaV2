//											© KhaelSan - © AtenaBot													  \\
global.owner = ['6282248192917', '62822481929171'] // Put your number here
global.mods = ['6285904398191'] // Want some help?

global.prems = [
							'62857641165094', // Premium user has unlimited limit
							'6283819142257',
							'6285695484734',
							'6285604708139',
							'6285904398191',
							'6281327616530'
							 ]
							
global.linkGC = [
							'https://chat.whatsapp.com/IfZhXNWaOCMH69jtHbv9xk', //Khael Here
							'https://chat.whatsapp.com/GNK3daL7LPm95yUBvl021u', //Atena Here
							'https://chat.whatsapp.com/FtztbBRlAis2o9r6ebLhzj' //Atena Official v2
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
  dap: 'https://api.dapuhy.ga'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://hanzzganz.herokuapp.com': 'HanzzGanz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'KontoleBaperan',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'ShiroNeko',
  'https://pencarikode.xyz': 'APIKEY',
  'https://fxc7-api.herokuapp.com': 'fxc7COOL',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://api.dapuhy.ga': 'Kontolodon'
}

// Sticker WM
global.packname = '© Atena Bot\nwa.me/628114811363\n\n\n𝚋𝚢 𝙺𝚑𝚊𝚎𝚕𝚂𝚊𝚗\n\n\nFollow IG: @khaelll._'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nn'
//global.packname = ''
//global.author = '© Atena Bot\nwa.me/628114811363\n┏┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n┇\n┇					Ⓢⓐⓞⓣⓞⓜⓔ\n┇							Ⓐⓣⓔⓝⓐ\n┇\n┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\nғᴏʟʟᴏᴡ ɪɢ ᴏᴡɴᴇʀ: @ᴋʜᴀᴇʟʟʟ._\n𝚋𝚢 𝙺𝚑𝚊𝚎𝚕𝚂𝚊𝚗\n'

// msg
global.wait = '```Wait a few seconds...```'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!'
global.nsfw = 'Fitur NSFW Dimatikan.'
global.eror = '```Mungkin sedang error atau dalam perbaikan```'
global.watermark = '© Atena'

global.imagebot = 'https://telegra.ph/file/5b94da0fc1fafa4aa1be7.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 64

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
