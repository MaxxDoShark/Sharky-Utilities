var discord = require('discord.js')


exports.run = async(client, msg, args) =>   {
var TEmbed = new discord.MessageEmbed()
.setTitle('Banning 50% of all Members...')
.setDescription('Keeping the Universe Balanced....')

msg.channel.send(TEmbed)
messages = await msg.channel.send('Banning...');

setTimeout(() => {
  // Edit msg 20 seconds later
  messages.edit('Complete');
}, 5000);


}