let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    res = await await fetch(global.API('lolhum', '/api/random/loli', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    json = await res.buffer()
   conn.sendButtonImg(m.chat, await(json), 'Yahaha Pedo pedo, bikin muak aja', watermark, '▶️ Get Again', `${usedPrefix + command}`, m, false)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^loli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
//Credit KhaelSan
//i hate pedo.