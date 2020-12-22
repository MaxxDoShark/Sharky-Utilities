var Discord = require('discord.js');


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
    

   

    var channel = msg.guild.channels.cache.find(c => c.name === 'moderation');

    var log = new Discord.MessageEmbed()
    .setTitle('User On Duty!')
   

    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('You are now on duty!')
   

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    var role = msg.guild.roles.cache.find(r => r.name === 'On Duty');
    var afk = msg.guild.roles.cache.find(r => r.name === 'AFK');

    member.roles.add(role);
    member.roles.remove(afk);


    
    msg.react('✅')
    msg.channel.send(`**${user}** is now on duty!`);
}
