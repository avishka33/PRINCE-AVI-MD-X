let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Alive.mp3'
  

conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, { audio: { url: vn }, seconds: '1934.4', ptt: true, mimetype: 'audio/mpeg', fileName: `deja de llorar.mp3` }, { quoted: m })}
handler.command = /^(:avibot|alive|a|avishka|Avishka|avishka shavinda)$/i
handler.fail = null
handler.exp = 100
export default handler

