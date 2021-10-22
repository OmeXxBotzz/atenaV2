let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
    let er = `
 Gacha Nsfw 
 waifu
 neko
 loli
 furry
 azurlane
 genshin
 frontline
 lol
 dota2


example:
${usedPrefix + command} neko
    `.trim()
	if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
				case 'waifu':
				case 'neko':
				case 'loli':
				let res = await fetch(global.API('lolhum', '/api/random/nsfw/' + args[0].toLowerCase(), {}, 'apikey'))
		m.reply(global.wait)
			if (!res.ok) throw await res.text()
			let img = await res.buffer()
			if (!img) throw img
				conn.sendButtonImg(m.chat, await(img), 'Hayoo ngapain gosok layar hp ke tytyd', watermark, '💦Ngocok Lagi', `${usedPrefix}nsfwgacha ` + args[0].toLowerCase(), m)
				break
				case 'ahegao':
				case 'furry':
				case 'azurlane':
				case 'genshin':
				case 'frontline':
				case 'lol':
				case 'dota2':
			let res2 = await fetch(global.API('fxc7', '/api/nsfw' + args[0].toLowerCase(), {}, 'apikey'))
			m.reply(global.wait)
				if (!res2.ok) throw await res2.text()
				let img2 = await res2.buffer()
				if (!img2) throw img2
					conn.sendButtonImg(m.chat, await(img2), 'Hayoo ngapain gosok layar hp ke tytyd', watermark, '💦Ngocok Lagi', `${usedPrefix}nsfwgacha ` + args[0].toLowerCase(), m)
			break
        default:
            throw er
    }
}
handler.help = ['nsfwgacha'].map(v => v + ' <type>')
handler.tags = ['hentai']
handler.command = /^nsfwgacha$/i

handler.nsfw = true
handler.limit = true

module.exports = handler
//Credit: By KhaelSan