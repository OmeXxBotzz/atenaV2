const { MessageType } = require("@adiwajshing/baileys")
let axios = require("axios");
let fs = require("fs");
let handler = async(m, { conn, args, text, usedPrefix: _p }) => {
//if(args.length == 0) return m.reply(`Cara Penggunaan: Reply Foto, Ketik *${_p}faketroli* <TextMessage> | <OrderMessage> | <OrderTitle>\nContoh: *${_p}faketroli* Hai Wibu | ZEROBOT | 10k Bang?`) 
	let [poop, tytyd] = text.split("|")
	if(!poop) return m.reply("Masukkan Teks Utama")
	if(!tytyd) tytyd = "Atena Bot"
	//if(!kecil) return m.reply("Masukkan Teks Title Order!")
  try{
//let q = m.quoted ? m.quoted : m
//let mime = (q.msg || q).mimetype || ''
   // if (!/image\/(jpe?g|png)/.test(mime)) return m.reply("Foto Aja Om :)")
    //let img = await q.download()
        let img = "./src/atena.jpg"
	const xixi = {
	                  key : {
                                participant : '0@s.whatsapp.net'
                               },
                    message: {
                    orderMessage: {
                            itemCount : 1,
                            status: 1,
                            surface : 1,
                            message: tytyd,
                            orderTitle: "Saotome Atena",
                            thumbnail: fs.readFileSync("./src/atena.jpg"),
                            sellerJid: '0@s.whatsapp.net'
                        }
                }
          }
          conn.sendMessage(m.chat, poop, MessageType.extendedText, { quoted: xixi })
      }catch (e){
      	m.reply("```ERROR```")
      console.log(e)
      }
}

handler.command = /^fake(troly|troli)$/i

module.exports = handler
