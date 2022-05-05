const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q',"liste"],
    utilisation: '{prefix}queue',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, Geçerli olandan sonra sırada müzik yok. ❌`);

        const embed = new MessageEmbed();
        const methods = ['🔁', '🔂'];

        embed.setColor('RED');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor(`Sunucu Müzik Listesi - ${message.guild.name} ${methods[queue.repeatMode]}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (Başlatan: <@${track.requestedBy.id}>)`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `Ve **${songs - 5}** Diğer Şarkı...` : `Listede **${songs}** Şarkı Var.`;

        embed.setDescription(`Şuanda Çalan: \`${queue.current.title}\`\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();
        embed.setFooter('Edited by Umut Bayraktar ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};