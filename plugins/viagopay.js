let handler = async (m, { conn }) => {
	let img = 'https://telegra.ph/file/a1fe8c19d45461f711d9d.png'
	let gopay = `
┍━━〔Via Gopay〕━⬢
│⬦ Note:
│Scan qr code di atas untuk transaksi ke Gopay
┕━━━⬢

_support terus bot Atena.._
  `.trim()
		conn.sendFile(m.chat, img, 'ovo.jpg', gopay, m)
}

handler.command = /^(viagopay|gopay)$/i

module.exports = handler