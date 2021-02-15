var Discord = require('discord.js');
var member;

exports.run = async(client, msg, args) => {
    const guild = client.guilds.cache.get("544714186698260490");
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) {
        msg.channel.send('You don\'t have permission to use this command')
    } 
        var role = msg.guild.roles.cache.find(r => r.name === 'Verified');

        
       msg.channel.overwritePermissions([
            {
               id: role.id,
               allow: ['SEND_MESSAGES', 'ADD_REACTIONS'],
            },
          ]);
       var lEmbed = new Discord.MessageEmbed()
       .setTitle('This Channel is Unlocked 🔓')
       .setDescription(`<@${msg.author.id}> has unlocked this channel with the reason ***${args.join(" ")}***`)
       msg.channel.send(lEmbed)
        
    }


