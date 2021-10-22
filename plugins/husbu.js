let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    let heum = await fetch(global.API('lolhum', '/api/random/husbu', {}, 'apikey'))
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'nih husbu nya', 'banh lu animek yah?', ' Get Again', `${usedPrefix + command}`, m)
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^husbu$/i
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
