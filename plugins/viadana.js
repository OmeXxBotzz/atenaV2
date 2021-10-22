let handler = async (m, { conn }) => {
	let dana = `
┍━━〔Via Dana〕━⬢
│⬦ Nomor:
│	082248192917
│
│⬦ Atas Nama:
│	Khael
┕━━━⬢

Scan qr code di atas untuk transaksi ke Dana
_support terus bot Atena.._
`.trim()
		conn.sendFile(m.chat, 'https://telegra.ph/file/4b266e8188483a42d6949.jpg', 'dana.jpg', dana, m)
}

handler.command = /^(viadana|dana)$/i

module.exports = handler