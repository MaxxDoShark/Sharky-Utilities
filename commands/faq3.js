var Discord = require('discord.js')

exports.run = async(client, msg, args) => {
    var embed = new Discord.MessageEmbed()
    .setTitle('Faq 3: What is this bot for? ')
    .addField('Sharky Utilities is a Private Moderation, and Entertainment bot used by some servers that have permission')
    .addField('***Sharky Utils***')
    .setFooter('Logo\'s and animations are created by TGFR and are under copyright using them without permission is illegal');
    msg.react('📧')
    msg.channel.send(embed)
}