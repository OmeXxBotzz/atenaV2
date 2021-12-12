let handler = async (m, { conn, args }) => {
	let khael = global.API('lolhum', '/api/pixivdl/' + args[0], {}, 'apikey' )
		if (!args[0]) {
			m.reply(m.chat, 'masukkin id pixiv nya', m)
			}
			else {
				await m.reply(wait)
				conn.sendFile(m.chat, khael, '', watermark, m, { thumbnail: await (await fetch(khael)).buffer() })
				}
				else throw eror
	}

handler.help = ['pixiv <id>']
handler.tags = ['downloader']
handler.command = /^(pixiv|pixivdl)$/i
handler.limit = true
module.exports = handler