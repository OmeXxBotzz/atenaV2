// Source Code from NekoBotz (DanishGanz)

global.linkGC = ['https://chat.whatsapp.com/INua3dEj25B0eFrHma0OsC', 'https://chat.whatsapp.com/B9bGT4rmw8PFnTYCYRcNab', 'https://chat.whatsapp.com/B9bGT4rmw8PFnTYCYRcNab'] // ganti jadi group lu
global.owner = ['6282248192917', '62822481929171', '6285904398191'] // Put your number here
global.mods = [] // Want some help?
global.prems = ["6283819142257"] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
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
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': '929b48b9aa5a91abed8526cd',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'ShiroNeko',
  'https://pencarikode.xyz': 'APIKEY',
  'https://fxc7-api.herokuapp.com': 'fxc7COOL',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = '©Atena 𝚋𝚢 𝙺𝚑𝚊𝚎𝚕𝚂𝚊𝚗'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nn' // ganti aja

// msg
global.wait = '*〔 Ｗａｉｔ〕*'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!'
global.nsfw = 'Fitur NSFW Dimatikan.'
global.eror = '_*Server Error*_'
global.watermark = '© Atena'

global.imagebot = 'https://telegra.ph/file/5b94da0fc1fafa4aa1be7.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 64

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
