const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['ses'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Mevcut ses seviyesi: **${queue.volume}** 🔊\n**Ses seviyesini değiştirmek için \`1\` ile \`${maxVol}\` arasında bir sayı yazın.**`);

        if (queue.volume === vol) return message.channel.send(`${message.author}, Değiştirmek istediğiniz ses düzeyi zaten geçerli olan ses düzeyidir. ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`${message.author}, **Ses seviyesini değiştirmek için \`1\` ile \`${maxVol}\` arasında bir sayı yazın.** ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Ses seviyesi değiştirildi: **%${vol}**/**${maxVol}** 🔊` : `${message.author}, Birşeyler yanlış gitti. ❌`);
    },
};