module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `Şu anda çalan müzik yok. ❌`, ephemeral: true, components: [] });

            int.member.send(`**Parça Kaydedildi: \`${queue.current.title}\` | Yayınlayan: \`${queue.current.author}\`, Kaydedilen Sunucu: \`${int.member.guild.name}\` ✅**`).then(() => {
                return int.reply({ content: `Müziğin adını özel mesajla sana gönderdim ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Size özel mesaj gönderemiyorum. ❌`, ephemeral: true, components: [] });
            });
        }
    }
};