const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

global.client.config = require('./config');

global.player = new Player(global.client, global.client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

if(process.env.TOKEN){
global.client.login(process.env.TOKEN).catch(e => {
console.log("Projene Girdiğin Bot Tokeni Hatalı Veya Botunun Intentleri KAPALI!")
})
} else {
console.log("Projenizde Bulunan .env İsimli Dosyadaki TOKEN Yazısının Karşısına Lütfen Bot Tokeninizi Yazın!")
}
