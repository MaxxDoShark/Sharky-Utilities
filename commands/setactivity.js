


var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

client.user.setActivity(args.join(" "), { type: 'WATCHING' })


}