const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h',"yardım","y"],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('Bu müzik botuna erişemek için: [Umut Bayraktar Müzik Botu](https://youtube.com/UmutBayraktarYT), daha fazla yardımamı ihtiyacın var Discord Topluluğumuza katılarak yardım alabilirsin.\nKendi müzik dünyanı yaratmaya ne dersin?');
        embed.addField(`Kullanıla Bilir - ${commands.size} Komut Var`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('Müzik Botu Komutları - Edited by Umut Bayraktar ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};
