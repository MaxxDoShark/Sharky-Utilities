var Discord = require('discord.js');


exports.run = async(client, msg, args) => {
user = msg.mentions.users.first();
if (!user) {
    console.log('invalid')
}

   
    msg.channel.send(user.lastMessage.content);
}
