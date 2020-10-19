var Discord = require('discord.js')

exports.run = async(client, msg, args) => {
    var embed = new Discord.MessageEmbed()
    .setTitle('Faq 1: Can I get the bot in my server? ')
    .addField('Sharky Utilities is a private bot that is only given out to a couple of servers, however we suggest that you use a bot like \n 1. Dyno \n 2. Mee6 \n 3. Appeture')
    .addField('***Sharky Utils***');

    msg.channel.send(embed)
}