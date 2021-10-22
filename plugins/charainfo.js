let fetch = require('node-fetch')
let axios = require('axios')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!`
  await m.reply(wait)
  let info = await fetch(global.API('lolhum', '/api/character', { query: text }, 'apikey'))
  if (!info.ok) throw await info.text()
  await axios(global.API('lolhum', '/api/character', {query: text}, 'apikey'))
  	              .then(({data}) => {
     	           let { id, name, image, description, favourites, media } = data.result
    				ini_txt = `*Id :* ${id}\n`
					ini_txt += `*Name :*`
					for (var x in name) {
                        ini_txt += `\n${x}\n`
                        	for (var y in name[x]) {
                        	ini_txt += `${name[x][y]}`
                        	}
                        }
					ini_txt += `\n*Description :* \n${description}\n`
					ini_txt += `*Favourites :* ${favourites}\n`
                    ini_txt += `\n*Dont forget to donate for support Atena Bot*`
                    let wm = "〔 Chara Detail 〕\n"
			conn.sendFile(m.chat, image.large, 'myCharaList.jpg', wm + ini_txt, m)
  	})
}
handler.help = ['character <query>']
handler.tags = ['anime']
handler.command = /^(chara|character)$/i

handler.limit = true

module.exports = handler
//Credit: KhaelSan
//cuk credit gw jgn dihapus lah biar gw terkenal dikt:/