var Discord = require('discord.js')

exports.run = async(client, msg, args) => {
    var embed = new Discord.MessageEmbed()
    .setTitle('Faq 4: How can I access advertising and exclusive advertising? ')
    .addField('You can access advertising at level 15 or if you are a merch owner and you can access exclusive adverising if your level 40+ or server booster!')
    .addField('***Sharky Utils***')
    .setFooter('Logo\'s and animations are created by TGFR and are under copyright using them without permission is illegal');
    msg.react('📧')
    msg.channel.send(embed)
}