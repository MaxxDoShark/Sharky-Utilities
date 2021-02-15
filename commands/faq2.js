var Discord = require('discord.js')

exports.run = async(client, msg, args) => {
    var embed = new Discord.MessageEmbed()
    .setTitle('Faq 2: Who Made ThiS Bot ')
    .addField('Sharky Utilities is a bot developed by MaxxDoShark (Maxx Whitehead) and the rest of Sharky Development')
    .addField('***Sharky Utils***')
    .setFooter('Logo\'s and animations are created by TGFR and are under copyright using them without permission is illegal');
    msg.react('📧')
    msg.channel.send(embed)
}