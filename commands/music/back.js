module.exports = {
    name: 'back',
    aliases: ['geri'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şu anda çalan müzik yok! ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`${message.author}, Zaten daha önce müzik çalmıyordu. ❌`);

        await queue.back();

        message.channel.send(`Bir önceki müzik çalmaya başladı... ✅`);
    },
};