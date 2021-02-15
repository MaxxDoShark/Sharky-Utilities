var Discord = require('discord.js')

exports.run = async(client, msg, args) => {

try {
    var user = msg.mentions.users.first();
    if (!user) return msg.channel.send('Oh no, invalid user ID.');
  
    const lastMessage = user.id.lastMessage;
    if (!lastMessage) return msg.channel.send('No messages from this user found.');
  
    msg.channel.send(lastMessage);
  } catch(err) {
    console.error(err);
  }

}