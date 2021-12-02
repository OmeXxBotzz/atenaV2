let fs = require('fs')
let handler = async (m, { conn, usedPrefix, command }) => {
	var database = fs.readFileSync('./database.json')
		conn.reply(m.chat, `Database: ${date}`, null)
			conn.sendFile(m.chat, database, "database.json", "", m)
}

handler.help = ['getdabase']
handler.tags = ['owner']
handler.command = /^(database|getdatabase)$/i

handler.owner = true

module.exports = handler