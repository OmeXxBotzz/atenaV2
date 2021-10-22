let fetch = require('node-fetch')
 let handler = async (m, { conn, usedPrefix, command }) => {
 	let heum = await fetch(global.API('lolhum', '/api/quotes/islami', {}, 'apikey'))
 amin = await heum.json()
    conn.sendButton(m.chat, `${amin.result}`.trim(), watermark, 'Quote Islami', `${usedPrefix + command}`)
    }
    
handler.help = ['muslimq']
handler.tags = ['quotes']
handler.command = /^(muslimq)$/i
module.exports = handler