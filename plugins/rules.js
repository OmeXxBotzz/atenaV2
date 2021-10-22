let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  await m.reply('wait Kakak!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
			〔 *R u l e s* 〕

⬢ SEMUA YANG DIKATAKAN OWNER
ADALAH MUTLAK
⬢ DILARANG SPAM, CALL/VCALL
AUTO BLOCK SYSTEM! JIKA TIDAK
SENGAJA, CHAT OWNER
⬢ KAMI TIDAK BERTANGGUNG
JAWAB ATAS APA YANG USER
PERINTAHKAN KEPADA BOT
⬢ KAMI AKAN MENYIMPAN DATA
SEPERTI NOMER TELEPON/UMUR
USER DI DATABASE KAMI
⬢ KAMI TIDAK PERNAH
MEMBOCORKAN DATA PRIBADI
PARA USER
⬢ SEND VIRUS/BUG? CUPU BAT
LU KONTOL, KETEMUAN SINI AJG
BAKU HANTAM KITA
⬢ RULES DAPAT BERUBAH
SEWAKTU-WAKTU DEMI
KEAMANAN & KENYAMANAN BOT

${readMore}

┍━━〔 Info Atena Bot 〕
│⬦ *Versi:* ${package.version}
│⬦ *HomePage:* ${(package.homepage ? package.homepage.url || package.homepage : '[unknown github url]')}
│⬦ *Issue:* ${package.bugs.url}
│⬦ *Speed:* ${neww - old} *ms*
│⬦ *Total User:* ${totalreg} *user*
│⬦ *Uptime:* ${uptime}
┕━━━⬢

Join My Group Chat: *${conn.getName(conn.user.jid)}* :
${(global.linkGC).map((v, i) => '⬦ *Group ' + (i + 1) + '*\n' + v).join`\n\n`}

`.trim(), m)
}

handler.help = ['rules', 'aturan']
handler.tags = ['info']
handler.command = handler.command = /^(rules|aturan)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
