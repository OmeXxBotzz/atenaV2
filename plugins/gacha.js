let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let er = `
┌〔 List Gacha 〕
├ waifu
├ husbu
├ neko
├ loli
├ elf
├ shota
├ sagiri
├ elaina
├ kanna
├ shinobu
├ megumin
├ art
├ wallnime
├ genshin
├furry
├ azurlane
├ frontline
├ lol
├ dota2
└────

example:
${usedPrefix + command} elf
_© Atena_
    `.trim()
    if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
        case 'waifu':
        case 'husbu':
        case 'neko':
        case 'loli':
        case 'elf':
        case 'shota':
        case 'sagiri':
        case 'kanna':
        case 'elaina':
        case 'shinobu':
        case 'megumin':
        case 'art':
        case 'wallnime':
        m.reply(global.wait)
		let res = await fetch(global.API('lolhum', '/api/random/' + args[0].toLowerCase(), {}, 'apikey'))
			if (!res.ok) throw await res.text()
			let img = await res.buffer()
			if (!img) throw img
				conn.sendButtonImg(m.chat, await(img), 'Nih ' + args[0].toLowerCase() + ' nya', watermark, '⏩Get Again', `${usedPrefix}gacha ` + args[0].toLowerCase(), m)
            break
		case 'genshin':
		case 'furry':
		case 'azurlane':
		case 'frontline':
		case 'lol': //league of legends
		case 'dota2':
		let res = await fetch(global.API('fxc7', '/api/sfw/' + args[0].toLowerCase(), {}, 'apikey'))
		m.reply(global.wait)
		if (!res.ok) throw await res.text()
			let img = await res.buffer()
			if (!img) throw img
				conn.sendButtonImg(m.chat, await(img), 'Nih ' + args[0].toLowerCase() + ' nya', watermark, '⏩Get Again', `${usedPrefix}gacha ` + args[0].toLowerCase(), m)
			break
        default:
            throw er
    }
}
handler.help = ['gacha'].map(v => v + ' <type>')
handler.tags = ['anime']
handler.command = /^gacha$/i

handler.limit = true

module.exports = handler
//credit: KhaelSan