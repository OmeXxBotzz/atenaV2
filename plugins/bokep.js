let handler = async (m, { conn }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jngn comly  ya', m)
}
handler.help = ['bkp']
handler.tags = ['bokep']

handler.command = /^(bokep)$/i
handler.premium = false
handler.nsfw = true
handler.limit = true
module.exports = handler