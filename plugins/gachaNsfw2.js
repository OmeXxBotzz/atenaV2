let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
    let er = `
┌〔 Gacha Nsfw v2 〕
│⬦ yaoi [yang make gay]
│⬦ ecchi
│⬦ hentai
│⬦ ahegao
│⬦ hololewd
│⬦ sideoppai
│⬦ animefeets
│⬦ animebooty
│⬦ chiisaihentai
│⬦ animethighss
│⬦ hentaiparadise
│⬦ hentaifemdom
│⬦ lewdanimegirls
│⬦ biganimetiddies
│⬦ animebellybutton
│⬦ hentai4everyone
│⬦ animearmpits [fav]
└────

┌〔 Gacha Nsfw v2 〕
│⬦ ero
│⬦ yuri
│⬦ trap
│⬦ lewd
│⬦ eron
│⬦ solo
│⬦ keta
│⬦ tits
│⬦ erok
│⬦ solog
│⬦ feetg
│⬦ lewdk
│⬦ pussy_jpg
│⬦ femdom
│⬦ eroyuri
│⬦ cum_jpg
│⬦ blowjob
│⬦ erofeet
│⬦ holoero
│⬦ classic
│⬦ erokemo
│⬦ futanari
└────

example:
${usedPrefix + command} hololewd
${usedPrefix + command} pussy_jpg
    `.trim()
	if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
				case 'chiisaihentai':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
		let res = await fetch(global.API('lolhum', '/api/random/nsfw/' + args[0].toLowerCase(), {}, 'apikey'))
		m.reply(global.wait)
			if (!res.ok) throw await res.text()
			let img = await res.buffer()
			if (!img) throw img
				conn.sendButtonImg(m.chat, await(img), 'Hayoo ngapain gosok layar hp ke tytyd', watermark, 'Gacha Again', `${usedPrefix}nsfwgacha ` + args[0].toLowerCase(), m)
            	break
				case 'ero':
				case 'yuri':
				case 'trap':
				case 'lewd':
				case 'eron':
				case 'solo':
				case 'keta':
				case 'tits':
				case 'erok':
				case 'solog':
				case 'feetg':
				case 'lewdk':
				case 'pussy_jpg':
				case 'femdom':
				case 'eroyuri':
				case 'cum_jpg':
				case 'blowjob':
				case 'erofeet':
				case 'holoero':
				case 'classic':
				case 'erokemo':
				case 'futanari':
				let res2 = await fetch(global.API('lolhum', '/api/random2/' + args[0].toLowerCase(), {}, 'apikey'))
		m.reply(global.wait)
			if (!res2.ok) throw await res2.text()
			let img2 = await res2.buffer()
			if (!img2) throw img2
				conn.sendButtonImg(m.chat, await(img2), 'Hayoo ngapain gosok layar hp ke tytyd', watermark, 'Gacha Again', `${usedPrefix}nsfwgacha ` + args[0].toLowerCase(), m)
				break
        default:
            throw er
    }
}
handler.help = ['nsfwgacha2'].map(v => v + ' <type>')
handler.tags = ['hentai']
handler.command = /^nsfwgacha2$/i

handler.premium = true
handler.limit = true

module.exports = handler
//Credit: By KhaelSan
