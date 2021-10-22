let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'Reply/balas Pesan!'
    if (!text) throw `Ketik *${usedPrefix}list${which}* untuk melihat list nya`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `'${text}' sudah terdaftar`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${usedPrefix}get${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker|gif)$/

module.exports = handler
