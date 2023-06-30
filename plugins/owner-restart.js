import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    await m.reply('Restarting *💖Prince avi md 💖* WA BOT...\n Plzz waiting..ඔහොම ටිකක් ඉදපන් 🤣')
    process.send('reset')
  } else throw 'eh'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','hentairestart'] 

handler.rowner = true

export default handler
