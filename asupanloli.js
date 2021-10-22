let fetch = require('node-fetch')


let handler  = async (m, { conn }) => {
m.reply(global.wait)
		await conn.sendFile(m.chat, 'https://api.caliph71.xyz/api/asupan/loli?apikey=fqoq5YgB', '', watermark, m)
}
handler.help = ['asupanloli']
handler.tags = ['internet']
handler.command = /^(asupanloli)$/i

handler.limit = true

module.exports = handler
//Credit: KhaelSan
//if u human, please don't remove the Credit!