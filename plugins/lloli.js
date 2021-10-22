let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
     	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
    res = await fetch(global.API('lolhum', '/api/random/nsfw/loli', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    json = await res.buffer()
   conn.sendButtonImg(m.chat, await(json), 'Yahaha Pedo pedo, bikin muak aja', watermark, '▶️ Get Again', `${usedPrefix + command}`, m, false)
}
handler.help = ['nsfwloli']
handler.tags = ['hentai']
handler.command = /^nsfwloli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
//Credit KhaelSan
//I hate Pedo.