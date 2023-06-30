import fg from 'api-dylux'

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {

  if (!text) throw `💖Prince avi md 💖img downloader\n\n🇱🇰 Ex: *${usedPrefix + command}* 💖Prince avi md 💖`

  let res = await fg.googleImage(text)

  conn.sendFile(m.chat, res.getRandom(), 'img.png', `

🇱🇰 Results : *${text}*`.trim(), m)

}

handler.help = ['imagen']

handler.tags = ['img']

handler.command = /^(img|image|photo|pic)$/i

handler.diamond = false

export default handler



