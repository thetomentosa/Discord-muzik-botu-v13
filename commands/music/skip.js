module.exports = {
    name: 'skip',
    aliases: ['geç'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `**${queue.current.title}**, İsimli şarkı atlandı. ✅` : `${message.author}, Birşeyler yanlış gitti. ❌`);
    },
};