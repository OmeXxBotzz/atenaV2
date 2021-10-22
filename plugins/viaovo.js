let handler = async (m, { conn }) => {
	let ovo = `┍━━〔Via Dana〕━⬢
│⬦ Nomor:
│	082248192917
│
│⬦ Atas Nama:
│	Khael
┕━━━⬢

Scan qr code di atas untuk transaksi ke OVO
_support terus bot Atena.._
  `.trim()
		conn.sendFile(m.chat, 'https://telegra.ph/file/b500ea18a3641048df0bd.jpg', 'ovo.jpg', ovo, m)
}

handler.command = /^(viaovo|ovo)$/i

module.exports = handler