const Brainly = require('brainly-scraper-v2')
const brain = new Brainly("id")
const axios = require('axios')
let handler = async function (m, { text, usedPrefix, command }) {
	await m.reply(wait)
	res = await axios.get(global.API('zeks', '/api/brainly/', {q: text}, 'apikey'))
  for(let i = 0; i < res.data.data.length; i++) {
                            m.reply(`Pertanyaan : ${res.data.data[i].question}\n\nJawaban : ${res.data.data[i].answer[0].text}\n` + watermark)
                        }
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']

handler.command = /^brainly$/i

module.exports = handler
