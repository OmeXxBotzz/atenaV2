let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(imagebot)).buffer(), `
┍━━〔List Sewa/Prem〕━⬢
│⬦ *1 Bulan* :      *Rp 15000*
│⬦ *Permanen* : *Rp 25000*
│⬦ *Premium* :   *Rp 20000*
│⬦ *Moderator* : *Rp 30000* (stok terbatas)
│⬦ *Sc Bot* :        *Rp 50000*
│
┝━━〔Payments/Pembayaran〕━⬢
│⬦ Ovo
│⬦ Dana
│⬦ Gopay
│⬦ Pulsa Tsel (rate)
│
┕━━━⬢

Note: Syarat dan Ketentuan Berlaku`.trim(), watermark, 'Dana', '.viadana', 'Ovo', '.viaovo', 'Gopay', '.viagopay', m)
}

handler.help = ['sewabot']
handler.tags = ['info']
handler.command = /^(premium|sewa|sewabot|belibot)?$/i

module.exports = handler