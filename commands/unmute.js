var Discord = require('discord.js')

exports.run = async(client, msg, args) => { 
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You can\'t use that!');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('You didn\'t mention anyone!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return msg.reply('They aren\'t in the server!');
    if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You cannot unmute that person!');

    var channel = msg.guild.channels.cache.find(c => c.name === 'moderation');

    var log = new Discord.MessageEmbed()
    .setTitle('User Unmuted')
    .addField('User:', user, true)
    .addField('By:', msg.author, true)

    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('You were unmuted! 😀')

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    var role = msg.guild.roles.cache.find(r => r.name === 'Muted');
    member.roles.remove(role);
    msg.react('✅')
}