const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} stikerinbot`
  let res = await fetch(global.API('lolhum', '/api/stalkig/' + args[0], {}, 'apikey' ))
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.data.photo_profile, 'eror.jpg', `
⟣──────❲ Instagram Stalk ❳───────⟢

*Username:* ${json.data.username}
*Fullname:* ${json.data.fullname}
*Followers:* ${json.data.follower}
*Total Post:* ${json.data.posts}
*Private:* undefined
*Bio:* ${json.data.bio}
*Link:* https://instagram.com/${args[0]}

Follow IG Owner guna menambah social credit\nhttps://instagram.com/khaelll._`
.trim(), m, 0, { thumbnail: await (await fetch(json.data.photo_profile)).buffer() })
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true
module.exports = handler