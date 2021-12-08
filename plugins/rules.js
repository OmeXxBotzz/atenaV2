let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  conn.sendButton(m.chat, `
⟣──────❲ Ｒｕｌｅｓ ❳───────⟢
📌 Semua Yang Dikatakan Owner Adalah Mutlak.
🔖¹ Dilarang Keras Menelpon/Video Call.
🔖² Dilarang Spam Chat/ Command/ ClickButton, Apalagi Spam cmd RPG Gak Ngotak.
🔖³ Kami Tidak Bertanggung Jawab Atas Apa Yang User Perintahkan Kepada Bot.
🔖⁴ Kami Akan Menyimpan Data Seperti Nomer Telepon/Umur User Di Database Kami.
🔖⁵ Kami Tidak Pernah Membocorkan Data Pribadi Para User.
🔖⁶ Dilarang Mengirimkan Virus Dalam Format Apapun di Chat Pribadi Maupun Chat Group.
🔖⁷ Rules Dapat Berubah Sewaktu-Waktu Demi Keamanan & Kenyamanan Bot.
🔖⁸ Dilarang Menyalin Desain Apapun Pada Bot Kami. (Desain mikir sendiri too lol)
🔖⁹ Dengan Menggunakan Bot, Berarti Anda Telah Menyetujui Semua Aturan dan Sanksi.
⟣──────────────────────⟢

⟣──────❲ Ｓａｎｋｓｉ ❳──────⟢
🔖 Jika Melanggar Rules Ke-1 User Akan Diblock (oleh Sistem Bot) dan Tidak Bisa Menggunakan Bot di Chat Pribadi Maupun Chat Group.
🔖 Jika Tidak Sengaja Melanggar Rules 1, Chat Owner Untuk Membuka Blocked.
🔖 Jika Melanggar Rules Ke-2 User Akan Dibanned, Apabila Berakibat Fatal(seperti bot pending/lag) Database User Akan Direset.
🔖 Jika Melanggar Rules Ke-6 User Akan Dibanned Permanent dan Bot Akan Keluar Dari Group
⟣──────────────────────⟢

${watermark}
`.trim(), 'Budayakan Membaca Sebelum Menggunakan', 'Pemilik Bot', usedPrefix + 'owner', m)
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
