
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
 *DONATE* 
If you get more info of 💖Prince avi md 💖 Please Contact 94772836332 💰`
let img = 'https://avatars.githubusercontent.com/u/134716496?v=4.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donasi'] 

export default handler
