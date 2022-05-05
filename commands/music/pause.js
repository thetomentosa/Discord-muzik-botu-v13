module.exports = {
    name: 'pause',
    aliases: ["dur"],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Şuanda çalan **${queue.current.title}** isimli müzik durdu. ✅` : `${message.author}, Birşeyler yanlış gitti. ❌`);
    },
};