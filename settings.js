import fs from 'fs';
import chalk from 'chalk';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

/*
	* Created by dark-end5
	* Follow https://github.com/dark-end5
	* Repository: https://github.com/dark-end5/killer
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ["254706519089"] // ['628','628'] 2 owner atau lebih
global.author = 'dark-end5'
global.botname = 'Killer'
global.packname = 'Killer Bot'
global.timezone = 'Africa/Nairobi' // Change with .settimezone command
global.locale = 'en' // Change with .setlocale command
global.listprefix = ["+","!","."]
global.defaultAdminKey = crypto.randomBytes(5).toString("hex");

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json' // Put your mongodb url here if using mongodb. Format : 'mongodb+srv://...'
global.tempatStore = 'baileys_store.json' // Put your mongodb url here if using mongodb. Format : 'mongodb+srv://...'
global.pairing_code = true
global.number_bot = '' // You can input bot number here if using panel, otherwise get session. Format : '628xx'

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://telegra.ph/file/fe4843a1261fc414542c4.jpg',
	thumbnail: fs.readFileSync('./src/media/killer.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-offi[...]
}

global.my = {
	yt: "https://youtube.com/@dark-end5",
	gh: "https://github.com/dark-end5",
	gc: "https://chat.whatsapp.com/EqMTCcxdCZgHUJNl5KooCr",
	ch: "120363250409960161@newsletter"
}

global.limit = {
	free: Infinity,
	premium: Infinity,
	vip: 900
}

global.money = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key: "API key limit! Please upgrade: https://naze.biz.id",
	owner: "Owner only!",
	admin: "Admin only!",
	botAdmin: "Bot must be admin!",
	onWa: "This number is not registered on WhatsApp!",
	group: "Group only!",
	private: "Private chat only!",
	quoted: "Reply to the message!",
	limit: "Limit exceeded!",
	prem: "Premium only!",
	text: "Enter the text!",
	media: "Send the media!",
	wait: "Processing...",
	fail: "Failed!",
	error: "Error!",
	done: "Done!"
}

global.APIs = {
	naze: 'https://api.naze.biz.id',
	neosantara: 'https://api.neosantara.xyz/v1',
}
global.APIKeys = {
	'https://api.naze.biz.id': 'nz-298327ff62',
	'https://api.neosantara.xyz/v1': 'API_KEY_NEOSANTARA_AI',
}

// Other settings
global.jadwalSholat = {
	Subuh: '04:30',
	Dzuhur: '12:06',
	Ashar: '15:21',
	Maghrib: '18:08',
	Isya: '19:00'
}

global.badWords = ["dongo","konsol"] // Add other toxic words here. ex: ['dongo','dongonya']
global.chatLength = 1000

fs.watchFile(__filename, async () => {
	console.log(chalk.yellowBright(`[UPDATE] ${__filename}`))
});
