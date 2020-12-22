var rollDice = Math.floor(Math.random() * 6) + 1  
var Discord = require('discord.js');
var ms = require('ms');

exports.run = async(client, msg, args) => {
    let message1;
   
      // Send message & Store reference to the message
      message1 = await msg.channel.send('Rolling...');
        
      setTimeout(() => {
        // Edit msg 20 seconds later
        message1.edit('you got ' + rollDice + '!')
        rollDice = Math.floor(Math.random() * 6) + 1 
      }, 5000);
    } 