import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix}) => {
	
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
  let name = conn.getName(who) 
    let text = `
┏━⊜ *BALANCE* 
┃⋄ *Nombre* : @${m.sender.split`@`[0]} 
┃⋄ *Galletas* : *${global.db.data.users[who].cookie}*
┗━━━━━━━━━━━━━⬣

• *NOTA :* 
*_Puedes comprar 🍪 Galletas usando los comandos_*
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`
conn.reply(m.chat, text, m, { mentions: [m.sender] })
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'galletas', 'cookies', 'balance'] 
export default handler
