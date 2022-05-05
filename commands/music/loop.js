const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'döngü'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`${message.author}, İlk önce mevcut müziğin döngü modunu devre dışı bırakmalısınız. **(${client.config.px}loop)** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Döngü Modu: **${queue.repeatMode === 0 ? 'Aktif Değil' : 'Aktif'}**, Tüm sıra durmadan tekrarlanacak 🔁` : `${message.author}, Birşeyler yanlış gitti. ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`${message.author}, Döngü modunda önce mevcut kuyruğu devre dışı bırakmalısınız. **(${client.config.px}loop queue)** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Döngü Modu:  **${queue.repeatMode === 0 ? 'Aktif Değil' : 'Aktif'}**, Mevcut müzik durmadan tekrarlanacak (listedeki bütün müzikleri **${client.config.px}loop queue** seçeneği ile tekrarlata bilirsiniz.) 🔂` : `${message.author}, Birşeyler yanlış gitti. ❌`);
        };
    },
};