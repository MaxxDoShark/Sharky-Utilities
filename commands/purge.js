var discord = require('discord.js')
exports.run = async(client, msg, args) => {
if(!args[1]) return msg.reply ('Error, please define second argument')
msg.channel.bulkDelete(args[1]); //please note that you need other code that i posted 
}