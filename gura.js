const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    mentionedJid,
    WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys");
const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Jakarta").locale("id");
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const _gis = require('g-i-s')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const { promisify, util } = require('util')
const qrcodes = require('qrcode');
const googleIt = require('google-it')
const os = require('os');
const hx = require('hxz-api')

//------ FUNCTION -------
const { color, bgcolor } = require('./lib/warna')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close , sleep} = require('./lib/functions')
const { fetchJson, fetchText , kyun} = require('./lib/fetcher')
const { Tiktokdl } = require('./lib/tiktok.js')
const { yta, ytv } = require("./lib/ytdl");
const _prem = require("./lib/premium");
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { y2mateV, y2mateA } = require('./lib/y2mate')
const Exif = require('./lib/exif');
const exif = new Exif();
const { smsg } = require('./lib/simple')
const { mediafiredl } = require('./lib/mediafiredl')

//----- DATABASE -------
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _update = JSON.parse(fs.readFileSync('./database/update.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let anlink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

// Hit
global.hit = {}

//----- SINGKAT -------
prefa = '!'
owner = setting.owner
lolkey = setting.lolkey
mot = '≻'
ke = '```'
pathImg = setting.pathImg
ownerNomor = [`${setting.ownerNumber}`]
ownerName = setting.ownerName
rply = '_Made with GuraBot~_'
tamnel = fs.readFileSync('./media/gura.jpeg')



module.exports = gura = async (gura, dep) => {
try {
if (!dep.hasNewMessage) return
dep = dep.messages.all()[0]
if (!dep.message) return
if (dep.key && dep.key.remoteJid == 'status@broadcast') return
dep.message = (Object.keys(dep.message)[0] === 'ephemeralMessage') ? dep.message.ephemeralMessage.message : dep.message
m = smsg(gura, dep)
global.prefix

const content = JSON.stringify(dep.message)
const from = dep.key.remoteJid
const type = Object.keys(dep.message)[0]
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')

const getcmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};  

const cmd = (type === 'buttonsResponseMessage' && dep.message.buttonsResponseMessage.selectedButtonId && m.quoted.sender === gura.user.jid) ? dep.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && dep.message.listResponseMessage.singleSelectReply.selectedRowId && m.quoted.sender === gura.user.jid) ? dep.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && dep.message.conversation) ? dep.message.conversation : (type == 'imageMessage') && dep.message.imageMessage.caption ? dep.message.imageMessage.caption : (type == 'videoMessage') && dep.message.videoMessage.caption ? dep.message.videoMessage.caption : (type == 'extendedTextMessage') && dep.message.extendedTextMessage.text ? dep.message.extendedTextMessage.text : (type == 'stickerMessage') && (getcmd(dep.message.stickerMessage.fileSha256.toString('hex')) !== null && getcmd(dep.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? getcmd(dep.message.stickerMessage.fileSha256.toString('hex')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
if(gura.multi){
var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '.'

} else {
if (gura.nopref){
prefix = ''

} else {
prefix = prefa
}
}
body = (type === 'buttonsResponseMessage' && dep.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && m.quoted.sender === gura.user.jid) ? dep.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && dep.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && m.quoted.sender === gura.user.jid) ? dep.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && dep.message.conversation.startsWith(prefix)) ? dep.message.conversation : (type == 'imageMessage') && dep.message.imageMessage.caption.startsWith(prefix) ? dep.message.imageMessage.caption : (type == 'videoMessage') && dep.message.videoMessage.caption.startsWith(prefix) ? dep.message.videoMessage.caption : (type == 'extendedTextMessage') && dep.message.extendedTextMessage.text.startsWith(prefix) ? dep.message.extendedTextMessage.text : (type == 'stickerMessage') && (getcmd(dep.message.stickerMessage.fileSha256.toString('hex')) !== null && getcmd(dep.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? (getcmd(dep.message.stickerMessage.fileSha256.toString('hex')).startsWith(prefix) ? getcmd(dep.message.stickerMessage.fileSha256.toString('hex')) : '') : ""
budy = (type === 'conversation') ? dep.message.conversation : (type === 'extendedTextMessage') ? dep.message.extendedTextMessage.text : ''
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const on = process.uptime()
chats = (type === 'conversation') ? dep.message.conversation : (type === 'extendedTextMessage') ? dep.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
const arg = chats.slice(command.length + 2, chats.length)
const isCmd = body.startsWith(prefix)

mess = {
wait: 'Wait...',
search: 'Searching...',eror: 'Error',
success: '✔️ Berhasil ✔️',
error: {
stick: 'Ulangi bang',
Iv: 'Link tidak valid'
},
only: {
prem : 'Premium special features! Chat owner to get Premium access!',
group: 'Fitur Dapat digunakan di Dalam Group!',
ownerG: 'Fitur Dapat digunakan oleh Owner Group!',
ownerB: 'Fitur Khusus Owner Bot!',
admin: 'Fitur dapat Digunakan oleh Admin Group!',
Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!'
}
}

const totalchat = await gura.chats.all()
const botNumber = gura.user.jid
const ownerNumber = setting.ownerNumber
const ownerName = setting.ownerName
const botName = setting.botName
const isGroup = from.endsWith('@g.us')
const sender = dep.key.fromMe ? gura.user.jid : isGroup ? dep.participant : dep.key.remoteJid
const senderNumber = sender.split("@")[0]
const groupMetadata = isGroup ? await gura.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isOwner = ownerNumber.includes(sender)
const isAntilink = isGroup ? anlink.includes(from) : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const isWelkom = isGroup ? welkom.includes(from) : false
const itsMe = dep.key.fromMe ? true : false
const conts = dep.key.fromMe ? gura.user.jid : gura.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = dep.key.fromMe ? gura.user.name : conts.notify || conts.vname || conts.name || '-'
const q = args.join(' ')

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

// Fake Yutube        
        let fakeYutub = {
             "title": `Hai Kak ${pushname}`,
             "body": `${time}`,
             "mediaType": 2,
             "previewType": 2,
             "thumbnail": fs.readFileSync('./media/fake.jpg'),
             "mediaUrl": "https://youtu.be/ARKq-3Q4qF8"
        }

const fakevo = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'GuraBot',
      jpegThumbnail: fs.readFileSync('./media/gura.jpeg'),
      viewOnce: true
    }
  }
}

function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const reply = (teks) => {
   gura.sendMessage(from,teks,text,{quoted: fakevo})
}

const replyNtag = (teks) => {
	gura.sendMessage(from, teks, text, {quoted:fakevo, contextInfo:{mentionedJid:parseMention(teks)}})
}

const sendText = (from, teks) => {
        gura.sendMessage(from, teks, text)
        }

const replyNimg = (teks, gambar) => {
	gura.sendMessage(from, gambar,image, {caption : teks,quoted:fakevo, contextInfo:{mentionedJid:parseMention(teks)}})
}

const sendMess = (hehe, teks) => {
	gura.sendMessage(hehe, teks, text)
}

const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? gura.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : gura.sendMessage(from, teks.trim(), extendedText, {quoted:dep, contextInfo: {"mentionedJid": memberr}})
}


const sendButloc = (from, title, text, desc, button, sen, men, file) => {
return gura.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: fakevo, contextInfo: {"mentionedJid": men ? men : []}})
}
const sendButpdf = async (id, text, desc, gam, but = [], options = {}) => {
gura.sendMessage(from,{contentText: text,
	footerText: desc,
	buttons: but,
	headerType: 'DOCUMENT',
	documentMessage: {
		url: "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
		mimetype: "application/pdf",
		title: "gawrgura.pdf",
		fileSha256: "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
		fileLength: "999999999999",
		pageCount: 999,
		mediaKey: "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
		fileName: botName,
		fileEncSha256: "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
		directPath: "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
		mediaKeyTimestamp: "1634472176",
	jpegThumbnail: gam,
	contextInfo: 
	{externalAdReply: fakeYutub,
	mentionedJid: 
	[`0@s.whatsapp.net`, sender, ownerNumber]
	}}},
	'buttonsMessage',
	options)
}

const sendbutImg = async (id, text1, desc1, gam1, but = [], options = {}) => {
            let kma = gam1
            let mhan = await gura.prepareMessage(from, kma, image, {
                thumbnail: fs.readFileSync('./media/Itsuki.jpg')
            })
            const buttonMessages = {
                imageMessage: mhan.message.imageMessage,
                contentText: text1,
                footerText: desc1,
                buttons: but,
                headerType: 4
            }
            gura.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {
                quoted: fakevo,
                contextInfo: {
                    mentionedJid: [busines, ownerNumber, sender]
                }
            }, options)
        }

const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
                }
                
if (isGroup && !dep.key.fromMe && isAntilink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`「 *LINK GRUP TERDETEKSI* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
gura.groupRemove(from, [sender])
}, 2000);
}
}         
                
colors = ['red','white','black','blue','yellow','green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

// CMD
        if (isCmd && !isGroup)
            console.log(color('[ GURA ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'Dari', color(pushname))
        
        if (isCmd && isGroup)
             console.log(color('[ GURA ]'), color(time, 'yellow'), color(`${prefix + command} [${args.length}]`), 'Dari', color(pushname), 'Di', color(groupName))
            
function monospace(string) {
return '```' + string + '```'
} 
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const nebal = (angka) => {
return Math.floor(angka)
}


const hideTag = async function(from, text){
	       let anu = await gura.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       gura.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./media/gura.jpeg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  

async function sendStickerFakeSize(buffer) {
fsize = await gura.prepareMessage(from, buffer, sticker)
costick = await gura.prepareMessageFromContent(from,{
"stickerMessage": {
"url": fsize.message.stickerMessage.url,
"fileSha256": fsize.message.stickerMessage.fileSha256.toString('base64'),
"fileEncSha256": fsize.message.stickerMessage.fileEncSha256.toString('base64'),
"mediaKey": fsize.message.stickerMessage.mediaKey.toString('base64'),
"mimetype": fsize.message.stickerMessage.mimetype,
"height": fsize.message.stickerMessage.height,
"width": fsize.message.stickerMessage.width,
"directPath": fsize.message.stickerMessage.directPath,
"fileLength": `9999999999999`,
"mediaKeyTimestamp": fsize.message.stickerMessage.mediaKeyTimestamp.low,
"isAnimated": fsize.message.stickerMessage.isAnimated
}
}, {quoted:dep})
gura.relayWAMessage(costick)
}
		
async function sendStickerWm(from, path, quoted, packStick, authorStick, type, emote) {
let size =(type == null || type == undefined || type == false) ? 'full' : 'crop'
return await WSF.createSticker(path, { type: size ,pack: packStick,author: authorStick,categories: emote ? emote : ["❤"," 😍"," 😘"," 💕"," 😻"," 💑"," 👩‍❤‍👩"," 👨‍❤‍👨"," 💏"," 👩‍❤‍💋‍👩"," 👨‍❤‍💋‍👨"," 🧡"," 💛"," 💚"," 💙"," 💜"," 🖤"," 💔"," ❣"," 💞"," 💓"," 💗"," 💖"," 💘"," 💝"," 💟"," ♥"," 💌"," 💋"," 👩‍❤️‍💋‍👩"," 👨‍❤️‍💋‍👨"," 👩‍❤️‍👨"," 👩‍❤️‍👩"," 👨‍❤️‍👨"," 👩‍❤️‍💋‍👨"," 👬"," 👭"," 👫"," 🥰"," 😚"," 😙"," 👄"," 🌹"," 😽"," ❣️"," ❤️","😀"," 😃"," 😄"," 😁"," 😆"," 😅"," 😂"," 🤣"," 🙂"," 😛"," 😝"," 😜"," 🤪"," 🤗"," 😺"," 😸"," 😹"," ☺"," 😌"," 😉"," 🤗"," 😊","☹"," 😣"," 😖"," 😫"," 😩"," 😢"," 😭"," 😞"," 😔"," 😟"," 😕"," 😤"," 😠"," 😥"," 😰"," 😨"," 😿"," 😾"," 😓"," 🙍‍♂"," 🙍‍♀"," 💔"," 🙁"," 🥺"," 🤕"," ☔️"," ⛈"," 🌩"," 🌧","😯"," 😦"," 😧"," 😮"," 😲"," 🙀"," 😱"," 🤯"," 😳"," ❗"," ❕"," 🤬"," 😡"," 😠"," 🙄"," 👿"," 😾"," 😤"," 💢"," 👺"," 🗯️"," 😒"," 🥵","👋","🎊"," 🎉"," 🎁"," 🎈"," 👯‍♂️"," 👯"," 👯‍♀️"," 💃"," 🕺"," 🔥"," ⭐️"," ✨"," 💫"," 🎇"," 🎆"," 🍻"," 🥂"," 🍾"," 🎂"," 🍰","🌃"]}).then((buffer) => gura.sendMessage(from, buffer, MessageType.sticker, { quoted: quoted}))
}

const hour_now = moment().format('HH')
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
} else {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}

const sendStickerFromUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('../lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./core/stickers/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
gura.sendMessage(to, media, sticker,{quoted : dep})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(asw)
fs.unlinkSync(filess)
});
});
});
}

const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('../lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./core/stickers/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
gura.sendMessage(from, media, sticker, {quoted:dep})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
});
});
});
}

const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       gura.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       gura.sendMessage(from, hasil, type, options).catch(e => {
	       gura.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
 

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
gura.sendMessage(to, media, type, { quoted:dep, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})

fs.unlinkSync(filename)
});
}

// SELF & PUBLIC
if (gura.mode === 'self'){
if (!isOwner && !itsMe) return
}

// Add hit
        if (isCmd) {
            axios.get('https://api.countapi.xyz/hit/' + botName + '/visits').then(({
                data
            }) => hit.all = data.value)
            axios.get(`https://api.countapi.xyz/hit/${setting.botName}${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`).then(({
                data
            }) => hit.today = data.value)
            axios.get(`https://api.countapi.xyz/hit/${setting.botName}${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`).then(({
                data
            }) => hit.menu = data.value)
            axios.get(`https://api.countapi.xyz/hit/${setting.botName}${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`).then(({
                data
            }) => hit.play = data.value)
            axios.get(`https://api.countapi.xyz/hit/${setting.botName}${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`).then(({
                data
            }) => hit.stick = data.value)
            axios.get(`https://api.countapi.xyz/hit/${setting.botName}${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`).then(({
                data
            }) => hit.tiktok = data.value)
            axios.get(`https://api.countapi.xyz/hit/${setting.botName}${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`).then(({
                data
            }) => hit.pinte = data.value)
            axios.get(`https://api.countapi.xyz/hit/${setting.botName}${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`).then(({
                data
            }) => hit.command = data.value)
        }

// Premium
_prem.expiredCheck(premium)

//presence
gura.updatePresence(from, Presence.recording)

//auto read
gura.chatRead(from, "read")

//Function Anonymous Nuru
const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
			const match = (prefix instanceof RegExp ? // RegExp Mode?
			[[prefix.exec(m.text), prefix]] :
			Array.isArray(prefix) ? // Array?
            prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof prefix === 'string' ? // String?
            [[new RegExp(str2Regex(prefix)).exec(m.text), new RegExp(str2Regex(prefix))]] :
            [[[], new RegExp]]
			).find(p => p[1])
 if (match && m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
				this.anonymous = this.anonymous ? this.anonymous : {}
				let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
				if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
	contextInfo: {
		...m.msg.contextInfo,
		forwardingScore: 0,
		isForwarded: true,
		participant: other
	}
} : {})
				}
				return !0
			}

//--------- COMMAND ----------
switch(command) {

case 'menu':
thu = await gura.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} - @${sender.split("@")[0]}

_*• Contact Owner*_
_📮Whatsapp : @${owner}_
_💌Email : finxdev8@gmail.com_

_*User Info :*_
_Name : ${pushname}_
_Bio : ${thu.status}_
_Api : https://wa.me/${sender.split("@")[0]}_

_*Bot Info :*_
_Name : ${botName}_
_Owner : ${ownerName}_
_Lib : baileys_
_Prefix : ${prefix}_
_Runtime : ${runtime(on)}_
_Language : Javascript_

_🤖Enjoy The Bot Menu_

❑──[ _*Others*_ ]
${mot} _${prefix}menu_
${mot} _${prefix}sc_
${mot} _${prefix}runtime_
${mot} _${prefix}speed_
${mot} _${prefix}owner_
${mot} _${prefix}get_
${mot} _${prefix}dashboard_
${mot} _${prefix}lacakip_

❑──[ _*Search*_ ]
${mot} _${prefix}lirik_
${mot} _${prefix}otaku_
${mot} _${prefix}komiku_
${mot} _${prefix}chara_
${mot} _${prefix}playstore_

❑──[ _*Tools*_ ]
${mot} _${prefix}sticker_
${mot} _${prefix}swm_
${mot} _${prefix}toimg_
${mot} _${prefix}tourl_

❑──[ _*Group*_ ]
${mot} _${prefix}antilink <enable/disable>_
${mot} _${prefix}welcome <enable/disable>_
${mot} _${prefix}add_
${mot} _${prefix}kick_
${mot} _${prefix}promote_
${mot} _${prefix}demote_
${mot} _${prefix}hidetag_

❑──[ _*Owner*_ ]
${mot} _${prefix}bc_
${mot} _${prefix}join_
${mot} _${prefix}ohidetag_
${mot} _${prefix}setimage_
${mot} _${prefix}self_
${mot} _${prefix}public_
${mot} _${prefix}setprefix_
${mot} _> eval_
${mot} _$ exec_

❑──[ _*Anonymous Chat*_ ]
${mot} _${prefix}anonymous_
${mot} _${prefix}start_
${mot} _${prefix}next_
${mot} _${prefix}leave_

❑──[ _*Download*_ ]
${mot} _${prefix}tiktok query_
${mot} _${prefix}play query_
${mot} _${prefix}ytmp3 query_
${mot} _${prefix}ytmp4 query_
${mot} _${prefix}mediafire query_

❑──[ _*Storage*_ ]
${mot} _${prefix}sendfile_
${mot} _${prefix}savefile_
${mot} _${prefix}readfile_
${mot} _${prefix}downloadfile_

❑──[ _*Random Image*_ ]
${mot} _${prefix}bj_
${mot} _${prefix}ero_
${mot} _${prefix}ppcp_
${mot} _${prefix}cum_
${mot} _${prefix}feet_
${mot} _${prefix}yuri_
${mot} _${prefix}trap_
${mot} _${prefix}lewd_
${mot} _${prefix}feed_
${mot} _${prefix}eron_
${mot} _${prefix}solo_
${mot} _${prefix}gasm_
${mot} _${prefix}poke_
${mot} _${prefix}anal_
${mot} _${prefix}holo_
${mot} _${prefix}tits_
${mot} _${prefix}kuni_
${mot} _${prefix}kiss_
${mot} _${prefix}erok_
${mot} _${prefix}smug_
${mot} _${prefix}baka_
${mot} _${prefix}solog_
${mot} _${prefix}feetg_
${mot} _${prefix}lewdk_
${mot} _${prefix}waifu_
${mot} _${prefix}pussy_
${mot} _${prefix}femdom_
${mot} _${prefix}cuddle_
${mot} _${prefix}hentai_
${mot} _${prefix}eroyuri_
${mot} _${prefix}cum_jpg_
${mot} _${prefix}blowjob_
${mot} _${prefix}erofeet_
${mot} _${prefix}holoero_
${mot} _${prefix}classic_
${mot} _${prefix}erokemo_
${mot} _${prefix}fox_girl_
${mot} _${prefix}futanari_
${mot} _${prefix}lewdkemo_
${mot} _${prefix}wallpaper_
${mot} _${prefix}pussy_jpg_
${mot} _${prefix}kemonomimi_
${mot} _${prefix}nsfw_avatar_
${mot} _${prefix}ngif_
${mot} _${prefix}nsfw_neko_gif_
${mot} _${prefix}random_hentai_gif_

❑──[ _*Text Pro Me*_ ]
${mot} _${prefix}blackpink text_
${mot} _${prefix}neon text_
${mot} _${prefix}greenneon text_
${mot} _${prefix}advanceglow text_
${mot} _${prefix}futureneon text_
${mot} _${prefix}sandwriting text_
${mot} _${prefix}sandsummer text_
${mot} _${prefix}sandengraved text_
${mot} _${prefix}metaldark text_
${mot} _${prefix}neonlight text_
${mot} _${prefix}holographic text_
${mot} _${prefix}text1917 text_
${mot} _${prefix}minion text_
${mot} _${prefix}deluxesilver text_
${mot} _${prefix}newyearcard text_
${mot} _${prefix}bloodfrosted text_
${mot} _${prefix}halloween text_
${mot} _${prefix}jokerlogo text_
${mot} _${prefix}fireworksparkle text_
${mot} _${prefix}natureleaves text_
${mot} _${prefix}bokeh text_
${mot} _${prefix}toxic text_
${mot} _${prefix}strawberry text_
${mot} _${prefix}box3d text_
${mot} _${prefix}roadwarning text_
${mot} _${prefix}breakwall text_
${mot} _${prefix}icecold text_
${mot} _${prefix}luxury text_
${mot} _${prefix}cloud text_
${mot} _${prefix}summersand text_
${mot} _${prefix}horrorblood text_
${mot} _${prefix}thunder text_
${mot} _${prefix}pornhub text1 text2_
${mot} _${prefix}glitch text1 text2_
${mot} _${prefix}avenger text1 text2_
${mot} _${prefix}space text1 text2_
${mot} _${prefix}ninjalogo text1 text2_
${mot} _${prefix}marvelstudio text1 text2_
${mot} _${prefix}lionlogo text1 text2_
${mot} _${prefix}wolflogo text1 text2_
${mot} _${prefix}steel3d text1 text2_
${mot} _${prefix}wallgravity text1 text2_
`
pe =`Simple Whatsapp Bot @0`
const button = [
  {buttonId: `${prefix}dashboard`, buttonText: {displayText: 'DASHBOARD'}, type: 1},
  {buttonId: `${prefix}sc`, buttonText: {displayText: 'SCRIPT BOT'}, type: 1},
  {buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER'}, type: 1}
]
sendButpdf(from, `${menuh}`, `${pe}`, fs.readFileSync('./media/gura.jpeg'), button)
break

case 'owner':
let inilist = []
for (let i of ownerNomor) {
const vname = gura.contacts[i] != undefined ? gura.contacts[i].vname || gura.contacts[i].notify : undefined
inilist.push({
"displayName": `${ownerName}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${gura.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await gura.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: fakevo })
button = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1}
]
 buttons = {
    contentText: 'Nih Kak Owner ku><',
    footerText: `Kalo Mau di save Chat aja kak`,
    buttons: button,
    headerType: 1
}
await gura.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: fakevo})
break
case 'self':{
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
gura.mode = 'self'
reply('SELF - MODE')
}
break

case 'publik': case 'public':{
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
gura.mode = 'public'
reply('PUBLIC - MODE')
}
break
case 'dashboard':
const hitGlobal = require('util').inspect(hit.all)
const hitDay = require('util').inspect(hit.today)
const hitMenu = require('util').inspect(hit.menu)
const hitPlay = require('util').inspect(hit.play)
const hitPinte = require('util').inspect(hit.pinte)
const hitS = require('util').inspect(hit.stick)
const hitTik = require('util').inspect(hit.tiktok)
reply(`*GURA DASHBOARD*

_*HIT*_
_> Global : ${hitGlobal}_
_> Day : ${hitDay}_

_*Most Command User/Global*_
_> ${prefix}menu : ${hitMenu}_
_> ${prefix}tiktok : ${hitTik}_
_> ${prefix}pinterest : ${hitPinte}_
_> ${prefix}play : ${hitPlay}_
_> ${prefix}sticker : ${hitS}_`)
break
case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `_*${latensi.toFixed(4)} Detik*_`
			reply(pingnya)
			})
			break
case 'runtime':
reply(`${ke}${runtime(on)}${ke}`)
break
case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            gura.sendMessage(from,ram,image,{quoted:dep,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await gura.sendMessage(from,li,image,{quoted: dep})
            break
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await gura.sendMessage(from,di,image,{quoted: dep})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
	// Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                  buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                 buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await gura.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Bilang Makaseh Anj', imageMessage: imageMsg,
              contentText:`${rply}`,buttons,headerType:4}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              gura.relayWAMessage(prep)
        
                    break
case 'tiktok': 
       case 'ttdl':
             
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await Tiktokdl(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { reply(String(err)) })
             break
case 'tiktoknowm': 
       case 'ttnowm':
             
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await Tiktokdl(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break

case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana?')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error)
reply(monospace(mess.wait))
teks = args.join(' ')
rescun = await mediafiredl(teks)
result = `❒「MediaFire Download」
├ Nama : ${rescun[0].nama}
├ Ukuran : ${rescun[0].size}
└ Link : ${rescun[0].link}`
reply(result)
gura.sendMessage(from, {url: `${rescun[0].link}` }, document, { mimetype: `${rescun[0].mime}`, filename:`${rescun[0].nama}`})
break

case 'play':
//if(!isPremium)return reply(mess.only.prem)
if (!isGroup && !itsMe && !isOwner)return reply(mess.only.group)
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
reply('Searching...')
let yut = await yts(q)
yta(yut.videos[0].url)
.then(async(res) => {
const { thumb, title, filesizeF, filesize } = res
const capti = `P L A Y\n\n Title : ${title}\n\n Views: ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n URL : ${yut.videos[0].url}`
ya = await getBuffer(thumb)
py =await gura.prepareMessage(from, ya, image)

gbutsan = [
{buttonId: `${prefix}playmp3 ${q}`, buttonText: {displayText: '</AUDIO'}, type: 1},
{buttonId: `${prefix}playmp4 ${q}`, buttonText: {displayText: '</VIDEO'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: monospace(capti),
footerText: monospace(`Get Music / Video`),
buttons: gbutsan,
headerType: 4
}
await gura.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:fakevo})
})
break

case 'ytmp3':
if (!isGroup && !itsMe && !isOwner)return reply(mess.only.group)
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply('Link Invalid')
try {
reply(monospace(mess.wait))
yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 35000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
const captions = `YTMP3\n\nTitle : ${title}\nExt : MP3\nSize : ${filesizeF}\n\nSilahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`
bvidt2 = await getBuffer(thumb)
reply(captions)
bvid2 = await getBuffer(dl_link)
await 
gura.sendMessage(from, bvid2, audio, {
contextInfo: {
externalAdReply: {
"title": fake,
"body": `🎧 PLAY MUSIC 🎧`,
"mediaType": "VIDEO",
"mediaType": 2,
"thumbnailUrl": `https://i.ibb.co/6mLsrTb/59fb052184fd.jpg`,
"mediaUrl": args[0]
}
}, quoted:fakevo
})
})
})
} catch (err) {
reply(mess.error.api)
}
break

case 'ytmp4':
if (args.length < 1) return reply('Link Nya Mana?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
teks = args.join(' ')
res = await y2mateV(teks)
sendMediaURL(res[0].link, video, {quoted: fakevo, mimetype: 'video/mp4', filename: res[0].output})
break
case 'playmp3': 
if (!isGroup && !itsMe && !isOwner)return reply(mess.only.group)
try {
reply(monospace(mess.wait))
let yut = await yts(q)
yta(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*P L A YM P 3*\n\n${shp} Title : ${title}\n${shp} Ext : MP3\n${shp} Filesize : ${filesizeF}\n${shp} Upload : ${yut.videos[0].ago}\n${shp} Views : ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} Link : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)

const captionis = `*P L A YM P 3*\n\n${mot} Title : ${title}\n${mot} Size : ${filesizeF}\n${mot} Views: ${yut.videos[0].views}\n${mot} Duration : ${yut.videos[0].timestamp}\n${mot} URL : ${yut.videos[0].url}\n\n*_Permintaan Anda Sedang Di Prosess!_*`
//sendMediaURL(from, thumb, captionis)
sendMediaURL(from, dl_link, '')

})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
console.log(color('[PlayMp3]', 'red'), err)
reply(mess.error.api)
}
break
case 'playmp4':
try {
reply(monospace(mess.wait))
let yut = await yts(q)
ytv(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*P L A YM P 4*\n\n • Judul : ${title}\n • Upload : ${yut.videos[0].ago}\n • Ditonton : ${yut.videos[0].views}\n • Duration : ${yut.videos[0].timestamp}\n • Link : ${a.data}\n\n_Ukuran File Terlalu besar, anda bisa download sendiri lewat Link Diatas!!_`)
 
const mp4 = `
*PLAY VIDEO*\n\n Judul : ${title}\n\n Upload : ${yut.videos[0].ago}\n\n Ditonton : ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n Url : ${yut.videos[0].url}`
//sendMediaURL(from, thumb, mp4)
sendMediaURL(from, dl_link, mp4)
})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp4 Error : ' + err)
console.log(color('[PlayMp4]', 'red'), err)
reply(mess.error)
}
break

case 'ig':
//if(!isPremium)return reply(mess.only.prem)
if (!isGroup && !itsMe && !isOwner)return reply(mess.only.group)
try{
if(!q)return reply('Url nya mana?')
reply(monospace(mess.wait))
igg = await fetchJson(`http://zekais-api.herokuapp.com/igdl?url=${q}&apikey=dnYyDs9a`)
igt = `I N S T A G R A MD O W N L O A D E R

Username  : ${igg.username}
Fullname  : ${igg.fullName}
Followers : ${igg.followers}

Wait a minute ${igg.result[0].type} is being sent..`
reply(monospace(igt))
sendMediaURL(from,igg.result[0].url,monospace(`Type ${igg.result[0].type}`))
} catch (e) {
reply(e)
console.log(e)
}
break

case 'bcbut':
             if(!isOwner && !isMe) return reply('Anda Bukan Owner')
             if (args.length < 1) return reply('teks?')
             anu = await gura.chats.all()
             if (isMedia && !dep.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
             bc = await gura.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(7)}`
             	gura.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*${botName} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(7)}`
             gura.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*${botName} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
case 'sc':
case 'sourcecode':
reply(`Bot Ini Menggunakan Base :\nhttps://github.com/DepinKunn/GuraBase`)
break

case 'antilink':
                if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntilink) return reply(`Udah aktif`)
              anlink.push(from)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = anlink.indexOf(from)
              anlink.splice(anu, 1)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
        break
case 'welcome':
              if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
              break
case 'add':
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		if (args.length < 1) return reply('Yang mau di add jin ya?')
		if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
		try {
	      num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
		gura.groupAdd(from, [num])
	} catch (e) {
		console.log('Error :', e)
			reply('Gagal menambahkan target, mungkin karena di private')
					}
		break

case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
if(!q)return reply(`Format Error!\n\nExample : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
gura.groupRemove(from, [y])
reply(`Succses kick target!`)
break
  
case 'promote':
case 'pm':
if (!isGroupAdmins && !itsMe && !isOwner) return 
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (dep.message.extendedTextMessage === undefined || dep.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = dep.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
	teks = 'Perintah di terima, anda menjdi admin :\n'
	for (let _ of mentioned) {
		teks += `@${_.split('@')[0]}\n`
	}
	mentions(teks, mentioned, true)
	gura.groupMakeAdmin(from, mentioned)
} else {
	mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
	gura.groupMakeAdmin(from, mentioned)
}
break
case 'demote':
case 'dm' : 
if (!isGroupAdmins && !itsMe && !isOwner) return 
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (dep.message.extendedTextMessage === undefined || dep.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = dep.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
	teks = 'Perintah di terima, anda tidak menjadi admin :\n'
	for (let _ of mentioned) {
		teks += `@${_.split('@')[0]}\n`
	}
	mentions(teks, mentioned, true)
	gura.groupDemoteAdmin(from, mentioned)
} else {
	mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
	gura.groupDemoteAdmin(from, mentioned)
}
break

case 'gifstiker': case 's':
case 'stickergif': case 'sticker': case 'stiker':
if ((isMedia && !dep.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
const media = await gura.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
 console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
 console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
gura.sendMessage(from, fs.readFileSync(ran), sticker, {quoted:dep})
 fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && dep.message.videoMessage.seconds < 11 || isQuotedVideo && dep.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
const media = await gura.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(monospace(mess.wait))
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
gura.sendMessage(from, fs.readFileSync(ran), sticker, {quoted:fakevo})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break

case 'stickwm': case 'swm':
if (isMedia && !dep.message.videoMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
if(!q)return reply(`Example : ${prefix + command} nama|author`)
let media = await gura.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = q.split('|')[0]
var author = q.split('|')[1]
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./stickers/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
gura.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: dep})
fs.unlinkSync(media)
fs.unlinkSync(`./stickers/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && dep.message.videoMessage.fileLength < 10000000 || isQuotedVideo && dep.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
var pembawm = body.slice(9)
let media = await gura.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
reply(monospace(mess.wait))
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./stickers/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
gura.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: dep})
fs.unlinkSync(media)
fs.unlinkSync(`./stickers/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else{
reply(`Format Error!*\n\n*Example :*\n*_Reply gambar/video dengan Caption ${prefix + command} Nama|Author_`)
}
break 
    case 'toimg':
              if (!isQuotedSticker) return reply('reply stickernya')
              encmedia = JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await gura.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              gura.sendMessage(from, buffer, image, {quoted: fakevo, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
case 'ssweb':
case 'ss':
             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             if (!q) return reply('Apa Yang Mau di ss?')
             reply(mess.wait)
             ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${lolkey}&url=${q}`)
             await sendMediaURL(from, ini_buffer, image, { quoted: fakevo })
             break
             case 'tourl':
              if ((isMedia && !dep.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
              reply(mess.wait)
              boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
              owgi = await gura.downloadMediaMessage(boij)
              res = await uploadImages(owgi)
              reply(res)
              } else {
              reply('kirim/reply gambar/video')
}
              break
case 'get':
          case 'fetch': //ambil dari nuru
              if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
              res = await fetch(q)
              if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
              delete res
              throw `Content-Length: ${res.headers.get('content-length')}`
}
              if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
              txtx = await res.buffer()
              try {
              txtx = util.format(JSON.parse(txtx+''))
              } catch (e) {
              txtx = txtx + ''
              } finally {
              reply(txtx.slice(0, 65536) + '')
}
              break
case 'join': 
              if (!q) return reply('Linknya?')
              if (!isOwner) return reply(mess.only.owner)
              if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
              link = args[0].replace('https://chat.whatsapp.com/','')
              fak = gura.query({ json: ['action', 'invite', link],
              expect200: true })
              reply('Berhasil Masuk Grup')
              break
case 'hidetag':
          if (!isGroupAdmins) return reply(`lu bukan admin bngst`)
              try {
              quotedText = dep.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              hideTag(from, `${quotedText}`)
              } catch {
              hideTag(from, `${q}`)
}
              break
case 'ohidetag':
          if (!isOwner) return reply(`lu bukan admin bngst`)
              try {
              quotedText = dep.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              hideTag(from, `${quotedText}`)
              } catch {
              hideTag(from, `${q}`)
}
              break
case 'disassemble':
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
try {
return gura.sendMessage(from, JSON.stringify(eval(m.quoted),null,'\t'),text, {quoted:dep})
} catch(err) {
e = String(err)
reply(e)
}
break
case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = gura.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break

case 'setimage':
if (!isOwner) return reply(mess.OnlyOwner)
if (!isQuotedImage) return reply('Reply imagenya blokk!')
const messimagethumb = JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
const downiamgethumb = await gura.downloadMediaMessage(messimagethumb)
fs.unlinkSync(`${pathImg}`)
await sleep(2000)
fs.writeFileSync(`${pathImg}`, downiamgethumb)
reply('Succes')
break
case 'setprefix':
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
if (!q) return 
if (q === 'multi'){
gura.multi = true
gura.nopref = false
reply(`Berhasil mengubah prefix ke ${q}`)
} else if (q === 'nopref'){
gura.multi = false
gura.nopref = true
reply(`Berhasil mengubah prefix ke ${q}`)
} else if(args[0] === `${q}`){
gura.multi = false
gura.nopref = false
prefa = `${q}`
reply(`Berhasil mengubah prefix ke ${q}`)
}
break
//----- Anonymous ------
case 'anonymous': {
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
sendMess(m.chat, `Welcome To Anonymous Chat\n\n${prefix}start - Search Partner\n${prefix}leave - Keluar Sesi Anonymous\n${prefix}next - Skip Sesi Anonymous\n${prefix}menu - All Menu`)
				}
break
case 'keluar': case 'leave': {
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
	await sendMess(m.chat, `_*Kamu tidak sedang berada di anonymous chat..*_`)
	throw false
}
m.reply('_Ok_')
let other = room.other(m.sender)
if (other) await sendMess(other, `_*Partner meninggalkan chat..*_`)
delete this.anonymous[room.id]
if (command === 'leave') break
				}
case 'mulai': case 'start': {
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
	await sendMess(m.chat, `_*Kamu masih berada di dalam anonymous chat, menunggu partner...*_`)
	throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
	await sendMess(room.a, `_*Partner Ditemukan!!*_`)
	room.b = m.sender
	room.state = 'CHATTING'
	await sendMess(room.b, `_*Partner Ditemukan!!*_`)
} else {
	let id = + new Date
	this.anonymous[id] = {
		id,
		a: m.sender,
		b: '',
		state: 'WAITING',
		check: function (who = '') {
			return [this.a, this.b].includes(who)
		},
		other: function (who = '') {
			return who === this.a ? this.b : who === this.b ? this.a : ''
		},
	}
	await sendMess(m.chat, `_*Menunggu Partner...*_`)
}
break
				}
				case 'next': case 'lanjut': {
if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
	await sendText(m.chat, `_*Kamu sedang tidak berada di dalam anonymous chat...*_`, m)
	throw false
}
let other = romeo.other(m.sender)
if (other) await sendText(other, `_*Partner meninggalkan chat...*_`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
	await sendText(room.a, `_*Partner Ditemukan!!*_`, m)
	room.b = m.sender
	room.state = 'CHATTING'
	await sendText(room.b, `_*Partner Ditemukan!!*_`, m)
} else {
	let id = + new Date
	this.anonymous[id] = {
		id,
		a: m.sender,
		b: '',
		state: 'WAITING',
		check: function (who = '') {
			return [this.a, this.b].includes(who)
		},
		other: function (who = '') {
			return who === this.a ? this.b : who === this.b ? this.a : ''
		},
	}
	await sendText(m.chat, `_*Menunggu Partner...*_`, m)
}
break
				}

case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                reply (mess.wait)
               buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`)
                buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await gura.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:`${rply}`, imageMessage: imageMsg,
              contentText:`Bilang Makasih Kek anj`,buttons,headerType:4}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: fakevo})
              gura.relayWAMessage(prep)
        
                    break

case 'wanted':
case 'circle':
case 'trash':
case 'rip':
case 'rainbow':
case 'jail':
case 'invert':
case 'wasted':
try{
if(!isQuotedImage)return reply('Reply imagenya om')
if (dep.message.extendedTextMessage != undefined || dep.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(monospace(mess.wait))
owgi = await gura.downloadMediaMessage(ger)
await fs.writeFileSync(`./textpro.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './textpro.jpeg')
teks = `${anu.display_url}`
sendMediaURL(from,`https://api-senku.herokuapp.com/api/${command}?img=${teks}`,rply)
fs.unlinkSync('./textpro.jpeg')
}
}catch (e){
console.log(e)
reply('Error')
}
break


case 'ppcp':
case 'ppcouple':

anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara`)
						buff1 = await getBuffer(anu.result.male)
						buttons = [{buttonId: `${prefix}sc`,buttonText:{displayText: `Script Bot`},type:1}]
              imageMsg = (await gura.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
              buttonsMessage = {footerText:`${rply}`, imageMessage: imageMsg,
              contentText:`Cowo`,buttons,headerType:4}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: fakevo})
              gura.relayWAMessage(prep)
            buff2 = await getBuffer(anu.result.female)
              buttons = [{buttonId: `${prefix}sc`,buttonText:{displayText: `Script Bot`},type:1}]
              imageMsg = (await gura.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
              buttonsMessage = {footerText:`${rply}`, imageMessage: imageMsg,
              contentText:`Cewe`,buttons,headerType:4}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: fakevo})
             setTimeout( async () => {
 gura.relayWAMessage(prep)
}, 5000)
break

case 'sendfile':
if (!sen.key.fromMe && !isOwner) return
if (!q) return reply(`Example : ${prefix+command} ./lib/simple.js|simple.js`)
namaf = q.split('|')[0]
fnama = q.split('|')[1]
reply(monospace(mess.wait))
 anud = fs.readFileSync(namaf)
gura.sendMessage(from, anud, document, {mimetype:'jpg/application', filename:`${fnama}`})
break
      
case 'savefile':
if (!itsMe&& !isOwner) return
if(!m.quoted) return reply('Reply Teksnya')
if(!q) return reply(`Nama Filenya Apa Kak?`)
reply(monospace(mess.wait))
mengsev = await m.quoted.text
fs.writeFileSync(`./${q}`, mengsev)
reply(`Sukses Save File Dengan Nama ${q}`)
break

case 'downloadfile':
if (!itsMe && !isOwner) return
if(!m.quoted) return reply('Reply File Yang Ingin Di Download!')
if (!q) return reply(`Nama Filenya Apa Kak?`)
reply(monospace(mess.wait))
saveas = await m.quoted.download()
fs.writeFileSync(`./${q}`, saveas)
reply(`Sukses Download File Dengan Nama ${q}`)
break

case 'readfile':
if (!itsMe && !isOwner) return
if(!m.quoted) return reply('_Reply File Yang Ingin Di Lihat!_')
if (!q) return reply(`Masukan Format File!`)
reply(monospace(mess.wait))
saveas = await m.quoted.download()
fs.writeFileSync(`./core/media/read.${q}`, saveas)
cmyd2 = `cat core/media/read.${q}`
var itsme2 = `0@s.whatsapp.net`
var split2 = `${fake}`
term2 = {
contextInfo: {
participant: itsme2,
quotedMessage: {
extendedTextMessage: {
text: split2,
}
}
}
}
exec(cmyd2, (err, stdout) => {
if (err) return gura.sendMessage(from, ` ${err}`, text, { quoted:fakevo })
if (stdout) {
gura.sendMessage(from, stdout, text, term2)
}
})
break

case 'lacakip':
if (!isGroup && !itsMe && !isOwner)return reply(mess.only.group)
try{
if(!q) return reply('Mana Ip Yang Mau di lacak?')
anu = await fetchJson(`http://hadi-api.herokuapp.com/api/iplookup/?ip=${q}`)
let ipe =`_*IP SUKSES DILACAK*_

_Negara: ${anu.result.country}_
_Kode Negara: ${anu.result.countryCode}_
_Wilayah: ${anu.result.region}_
_Nama Wilayah: ${anu.result.regionName}_
_Kota: ${anu.result.city}_
_Zona Waktu: ${anu.result.timezone}_`
reply(ipe)
} catch (e) {
reply(e)
console.log(e)
}
break

case 'tes':
gura.sendMessage(from,{contentText: 'Anjay Alok',
	footerText: 'Tergura gura',
	buttons: [
		{
			buttonId: '.sc',
			buttonText: {
				displayText: 'Script bot'
			},
			type: 1
		}
	],
	headerType: 'DOCUMENT',
	documentMessage: {
		url: "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
		mimetype: "application/pdf",
		title: "gawrgura.pdf",
		fileSha256: "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
		fileLength: "999999999999",
		pageCount: 999,
		mediaKey: "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
		fileName: "KirBotz",
		fileEncSha256: "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
		directPath: "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
		mediaKeyTimestamp: "1634472176",
	jpegThumbnail: tamnel,
	contextInfo: 
	{mentionedJid: 
	[sender, ownerNumber]
	}}},
	'buttonsMessage'
)
break

case 'clearall':
            if (!isOwner) return reply(mess.only.ownerB)
            let chiit = await gura.chats.all()
            for (let i of chiit) {
                gura.modifyChat(i.jid, 'delete', {
                    includeStarred: false
                })
            }
            reply(`Success!!`)
        break

case 'addprem':
if (!itsMe && !isOwner)return reply(mess.only.ownerB)
if (!q)return reply(`Format Error!\n\nExample :\n• ${prefix + command} @tag 10d\n\nNote :\n• s : detik\n• m : menit\n• h : jam\n• d : hari\n\n${rply}`)
expired = q.split(" ")[1]
const pnom = {id: `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`,expired: Date.now() + toMs(expired) }
premium.push(pnom) 
fs.writeFileSync('./database/premium.json',JSON.stringify(premium))
reply(`Succses Addpremium To Database\n${time}`)
break

case 'delprem':
if(!itsMe && !isOwner) return reply(mess.only.ownerB)
user = q.split('@')[1] + '@s.whatsapp.net'
for(let i=0; i<premium.length; i++){
if(user.includes(premium[i].id)){
let del = premium.indexOf(premium[i])
premium.splice(del, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
mentions(`Succes delete premium @${user.split("@")[0]}`,[user],true)
}
}
break

case 'listprem':
let txt = `── 「 LIST PREMIUM 」 ──\nTotal : ${premium.length}\n\n`
let men = [];
for (let i of premium){
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `ID : @${i.id.split("@")[0]}\nExpired : ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
mentions(monospace(txt), men, true)
break

case 'cekprem': case 'cekpremium':
let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
const prmm = isPremium ? `${cekprm.days} day ${cekprm.hours} hour ${cekprm.minutes} minute ${cekprm.seconds} second`:'Not Premium'
reply(`Nama : ${pushname}\nStatus : ${isPremium ? 'Premium':'Free'}\nStatus Bot : ${isOwner ? 'Owner':'User'}\nExpired : ${prmm}`)
break
      case 'addupdate':
             if (!isOwner) return reply(mess.only.owner)
             if (!q) return reply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/update.json', JSON.stringify(_update))
             reply(`Update fitur berhasil ditambahkan ke database!`)
             break             
      case 'update':
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `• *${_update}*\n\n`
}
             reply(updateList)
             break            

default:
if (budy.startsWith('>')) {
if (!itsMe && !isOwner) return
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
}

if (budy.startsWith('$')){
if (!itsMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${rply} :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}

}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'FINXBASE', color(sender.split('@')[0]))
	}		
	} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
}
	// console.log(e)
	}
}