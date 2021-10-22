let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) return
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw `Tag salah satu!`
  txt = text.replace('@' + who.split`@`[0], '').trimStart()
  return conn.sendContact(m.chat, who, txt || conn.getName(who), m)
}
handler.help = ['save', 'contact', 'kontak'].map(v => v + ' @mention <ContactName>')
handler.tags = ['']

handler.command = /^(save|contact|kontak)$/

module.exports = handler
