let handler = async (m, { conn }) => {
	let img = 'https://telegra.ph/file/268cbaf3d038d2984abed.png'
	let ovo = `
┍━━〔Via Ovo〕━⬢
│⬦ Note:
│Scan qr code di atas untuk transaksi ke Ovo
┕━━━⬢

_support terus bot Atena.._
  `.trim()
		conn.sendFile(m.chat, img, 'ovo.jpg', ovo, m)
}

handler.command = /^(viaovo|ovo)$/i

module.exports = handler