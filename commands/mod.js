var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    var user = msg.mentions.users.first();
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You can\'t use that!');
    if(!user) return msg.reply('You didn\'t mention anyone!');
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     
var user = msg.mentions.users.first();

var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }
    member.setNickname('Moderated Nickname ' + makeid(5));
}