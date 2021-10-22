let fetch = require('node-fetch')
let handler = async (m, { text }) => { 
  let url = await fetch(global.API('zeks', '/api/memeindo', {}, 'apikey'))
  let barbar = await url.json()
conn.sendFile(m.chat, barbar.result, 'memeindo', JSON.stringify(barbar, null, 2), m)
}
handler.command = /^(memeindo)$/i
handler.register = true
handler.private = false
handler.limit = true

module.exports = handler