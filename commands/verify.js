var Discord = require('discord.js')
exports.run = async(client, msg, args) => {
    if (msg.channel.name.toLowerCase() === 'verify') {
msg.member.send("Verified!")
msg.delete
var role = msg.guild.roles.cache.find(r => r.name === 'Verified');
msg.member.roles.add(role);
    } 
    
}