var Discord = require("discord.js");
var fs = require("fs");
exports.run = async(client, msg, args) => { 

let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
var uEmbed = new Discord.MessageEmbed()
.setTitle('Sharky Uptime')
.setDescription('Bot has been online for ' + uptime)
.setFooter('Made by Sharky Development \n Copyright Sharky Development © - Copyright Laggy Studios ©')
msg.channel.send(uEmbed)
}