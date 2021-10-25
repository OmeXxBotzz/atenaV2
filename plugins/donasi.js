let fetch = require('node-fetch')
let atena = 'https://telegra.ph/file/d87d256f3dda141d87db0.jpg'
let handler = async (m, { conn }) => conn.send3ButtonLoc(m.chat, await (await fetch(atena)).buffer(), `
┌〔 Donate/Donasi 〕
├ Dana : 082248192917
├ OVO : 082248192917
├ GOPAY : 082248192917
│
└────

Donate to Support Atena Bot
~Khael
`.trim(), watermark, 'Dana', '.viadana', 'OVO', '.viaovo', 'Gopay', '.viagopay',)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
