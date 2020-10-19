var Discord = require('discord.js')
var config = require('./config.json')
var fs = require('fs')
var ms = require('ms')
var client = new Discord.Client();

client.on('ready', async() => {
    console.log('Hello!')
});

client.on('message', async(msg) => {
    if(msg.author.bot) return;
    if(!msg.guild) return;

    var array = ['vagina', 'Put', 'Your', 'bad', 'words', 'in', 'these', 'boxes', 'for', 'automod'];

    if(!msg.member.hasPermission('MANAGE_MESSAGES')){
        if(array.some(w => ` ${msg.content.toLowerCase()} `.includes(` ${w} `))){
            msg.delete();

            var role = msg.guild.roles.cache.find(r => r.name === 'Muted');

            msg.member.roles.add(role);
                msg.member.roles.remove(role);
            setTimeout(async() => {

            }, ms('5m'))
        }
    }
if (msg.content === 'How Do I Get Roles' || msg.content === 'how do i get roles' || msg.content === 'how do I get roles?'){
    msg.channel.send('Check <#720231245623066644> to learn about roles and how to get them!')
}

if (msg.content === 'How do I become staff?') {
    msg.channel.send('You can find the application in <#719776061268688917> for staff.')
}

    var prefix = config.prefix;
    if(!msg.content.toLowerCase().startsWith(prefix)) return;

    var args = msg.content.split(' ');
    var cmd = args.shift().slice(prefix.length).toLowerCase();

    try {
        var file = require(`./commands/${cmd}.js`);
        file.run(client, msg, args);
    } catch(err) {
        console.warn(err);
    }
});

client.login(config.token);
