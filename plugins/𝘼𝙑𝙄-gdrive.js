
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {

	if (!args[0]) throw `💖Prince avi md 💖, Enter a Google Drive link`
	m.react(rwait) 
	try {
	let res = await fg.GDriveDl(args[0])
	 await m.reply(`
*💖Prince avi md 💖 Google Drive DOWNLOADER*

💝 *Number:* ${res.fileName}
💝 *Size:* ${res.fileSize}
💝 *type:* ${res.mimetype}`)
		
	conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
	m.react(done)
   } catch {
	m.reply('💝 Error: Check the link or try another link එක බෑ වෙන ලින්ක් එකක් බලහන් 💝') 
  }
}
handler.help = ['gdrive']
handler.tags = ['dl', 'prem']
handler.command = ['gdrive']
handler.diamond = false
handler.premium = false

export default handler
