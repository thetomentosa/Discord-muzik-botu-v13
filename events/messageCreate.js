module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;

    const prefix = client.config.px;

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    const DJ = client.config.opt.DJ;

    if (cmd && DJ.enabled && DJ.commands.includes(cmd.name)) {
        const roleDJ = message.guild.roles.cache.find(x => x.name === DJ.roleName);

        if (!message.member._roles.includes(roleDJ.id)) {
            return message.channel.send(`${message.author}, Bu komut sadece ${DJ.roleName} rolü olanlar için ayarlanmıştır. ❌`);
        }
    }

    if (cmd && cmd.voiceChannel) {
        if (!message.member.voice.channel) return message.channel.send(`${message.author}, Bir ses kanalına bağlı değilsin. ❌`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${message.author}, Benim ile aynı ses kanalında değilsiniz. ❌`);
    }

    if (cmd) cmd.execute(client, message, args);
};