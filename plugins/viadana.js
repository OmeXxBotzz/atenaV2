let handler = async (m, { conn }) => {
	let img = 'https://telegra.ph/file/9f20bffd7012b50e50d20.png'
	let dana = `
┍━━〔Via Dana〕━⬢
│⬦ Note:
│Scan qr code di atas untuk transaksi ke Dana
┕━━━⬢

_support terus bot Atena.._
`.trim()
		conn.sendFile(m.chat, img, 'dana.jpg', dana, m)
}

handler.command = /^(viadana|dana)$/i

module.exports = handler