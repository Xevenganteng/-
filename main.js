const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    Browsers,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple')
let WAConnection = simple.WAConnection(_WAConnection)
let GuraFinx = new WAConnection()
const { color, bgcolor } = require('./lib/warna')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const welcome = require('./detect/group')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./gura.js')
nocache('../gura.js', module => console.log(color('[UPDATE]', 'cyan'), color(`'${module}'`, 'green'), 'File Telah Berubah!'))
require('./main.js')
nocache('../main.js', module => console.log(color('[UPDATE]', 'cyan'), color(`'${module}'`, 'green'), 'File Telah Berubah!'))

const starts = async (gura = new WAConnection()) => {
	gura.logger.level = 'warn'
    gura.version = [2, 2143, 3]
	console.log(color(figlet.textSync('GuraBot', {
		font: 'The Edge',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(bgcolor(`❗WhatsApp BotWea`, 'red'))
	console.log(color('[EXEC]', 'cyan'), color('Owner Aktif Sekarang!..', 'green'))
	gura.browserDescription = ["GuraBot1", "Firefox", "3.0.0"];

	gura.on('qr', () => {
		console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Scan qr Nya Bro....'))
	})

	fs.existsSync(`./${setting.sessionName}.json`) && gura.loadAuthInfo(`./${setting.sessionName}.json`)
	gura.on('connecting', () => {
		console.log(color('[ SYSTEM ]', 'yellow'), color('!Mengkonek....'));
	})
	
	gura.on('open', () => {
		console.log(color('[ SYSTEM ]', 'yellow'), color('Bot is now online!'));
	})

	await gura.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(gura.base64EncodedAuthInfo(), null, '\t'))

    gura.on('CB:action,,call', async json => {
        const callerid = json[2][0][1].from;
        gura.sendMessage(callerid, `Maaf bot tidak menerima call`, MessageType.text)
        await gura.blockUser(callerid, "add")
    })
	
	gura.on('group-participants-update', async (anu) => {
		await welcome(gura, anu)
	})
	
	gura.on('chat-update', async (message) => {
		require('./gura.js')(gura, message)
	})
}

starts()