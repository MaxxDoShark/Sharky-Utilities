var discord = require('discord.js')


exports.run = async(client, msg, args) =>   {
    const guild = client.guilds.cache.get("544714186698260490");
    var member;
   
     
      
var TEmbed = new discord.MessageEmbed()
.setTitle(`Banning all ${guild.memberCount} Members...`)
.setDescription('Goodbye universe....')

msg.channel.send(TEmbed)
messages = await msg.channel.send('Banning... 10% complete');

setTimeout(() => {
  // Edit msg 20 seconds later
  messages.edit('Banning... 30% complete');
  setTimeout(() => {
    // Edit msg 20 seconds later
    messages.edit('Banning... 50% complete');
    setTimeout(() => {
        // Edit msg 20 seconds later
        messages.edit('Banning... 72% complete');
        setTimeout(() => {
            // Edit msg 20 seconds later
            messages.edit('Banning... 100% complete');
          }, 5000);
          
      }, 5000);
      
  }, 5000);
  
}, 5000);


}