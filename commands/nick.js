var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    var user = msg.mentions.users.first();
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You can\'t use that!');
    if(!user) return msg.reply('You didn\'t mention anyone!');
  
     
var user = msg.mentions.users.first();
var reason = args.splice(1).join(' ');
var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }
    member.setNickname(reason);
}