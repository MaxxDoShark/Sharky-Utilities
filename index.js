var Discord = require('discord.js')
var config = require('./config.json')
var fs = require('fs')
var ms = require('ms')
const spam = require('spamnya')
const { message } = require('spamnya')
var client = new Discord.Client();
var cron = require('node-cron');
var shell = require('shelljs');
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 5, // Amount of messages sent in a row that will cause a warning.
    maxInterval: 5000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
});

client.on('ready', async(msg) => {
    console.log('Ready!')
});

client.on('message', async(msg) => {
    if(msg.author.bot) return;
    if(!msg.guild) return;
    
    if (msg.mentions.has(client.user)) { //we check, whether the bot is mentioned, client.user returns the user that the client is logged in as
        var log = new Discord.MessageEmbed()
    .setTitle('<:PingPong:769729721734397982>')
    .addField('Please don\'t im trying to play minecraft', true)
    msg.channel.send(log);
     }
  
   
    var array = ['bad words here'];

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
    
        try {
        var channel = msg.channel
        var vcuser = channel.members
        if (msg.content.startsWith("/muteall")) {
            
            vcuser.forEach(member => {
                member.voice.setMute(true)
                member.voice.setDeaf(true)
            });
        
            msg.channel.send('Server muted');
        
        
        } else if (msg.content.startsWith("/unmuteall")) {
            
            vcuser.forEach(member => {
                member.voice.setMute(false)
                member.voice.setDeaf(false)
            });
            msg.channel.send('Server unmuted');
        
        }
        
    } catch(err) {
        console.warn(err);
    }

  

   

    if(msg.content.includes("http://") || msg.content.includes("https://") || msg.content.includes("www.") || msg.content.includes(".com")) {
        if (msg.channel.name.toLowerCase() === '『advertising』' || msg.channel.name.toLowerCase() === '『exclusive-advertising』' || msg.channel.name.toLowerCase() === '『off-topic』' || msg.channel.name.toLowerCase() === 'announcements' || msg.channel.name.toLowerCase() === 'server-videos📷') {
            console.log('advertised') } else {
        console.log("deleted " + msg.content + " from " + msg.author)
        msg.delete();
        msg.channel.send("No links here, " + msg.author.username)
            }
      }
      
      if(msg.content.includes("discord.gg") || msg.content.includes(".gg") || msg.content.includes("discord .gg") || msg.content.includes("discord.gg/")) {
        if (msg.channel.name.toLowerCase() === '『advertising』' || msg.channel.name.toLowerCase() === '『exclusive-advertising』' || msg.channel.name.toLowerCase() === 'announcements' || msg.channel.name.toLowerCase() === 'server-videos📷') {
            console.log('advertised') } else {
        console.log("deleted " + msg.content + " from " + msg.author)
        msg.delete();
        msg.channel.send("No  server links here, " + msg.author.username)
            }
      }
    
if (msg.content === 'How Do I Get Roles' || msg.content === 'how do i get roles' || msg.content === 'how do I get roles?'){
    msg.channel.send('Check <#720231245623066644> to learn about roles and how to get them!')
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
