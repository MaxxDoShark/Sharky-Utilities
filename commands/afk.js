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
    var staff = msg.guild.channels.cache.find(c => c.name === 'staff-chat');

    var log = new Discord.MessageEmbed()
    .setTitle('User Off Duty!')
   

    channel.send(log);
    staff.send("<@&544715330703065098> <@&701655897864273940> <@&714608468534886411> A staff just went afk can we get someone to go on duty if you can type >start and go start chatting")

    var embed = new Discord.MessageEmbed()
    .setTitle('You are now off duty!')
   

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    var role = msg.guild.roles.cache.find(r => r.name === 'AFK');
    var duty = msg.guild.roles.cache.find(r => r.name === 'On Duty');

    member.roles.add(role);
    member.roles.remove(duty);

    
    msg.react('✅')
    msg.channel.send(`**${user}** is now off duty!`);
}
