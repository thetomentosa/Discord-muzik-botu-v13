module.exports = async (client) => {
    console.log(`${client.user.username} İsmi ile Bot Giriş Yaptı!`);

    client.user.setActivity(client.config.playing);
};