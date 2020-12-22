var Discord = require('discord.js');


exports.run = async(client, msg, args) => {
 

   

    

    

   

    
    var staff = msg.guild.channels.cache.find(c => c.name === 'staff-chat');

    staff.send('<@&769773125423988758> someone has called a staff emergency!')
}
