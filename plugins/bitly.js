let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => { 
	if (!text) throw 'masukan link'
      let res = await fetch(global.API('fxc7', '/api/tools/bitly', { url: text }, 'apikey'))
      if (!res.json.status) throw json
    let hasil = `Result: ${res.json.result.link}`.trim()
          
    m.reply(hasil)
    }
handler.help = ['bitly', 'short']
handler.tags = ['internet']
handler.command = /^(bitly|short)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
