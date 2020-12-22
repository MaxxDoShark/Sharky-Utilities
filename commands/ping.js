exports.run = async(client, msg, args) => {
    msg.channel.send(`🏓Pong! \n 💾${client.ws.ping}ms`);
}