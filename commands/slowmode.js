var discord = require('discord.js')


exports.run = async(client, msg, args) =>   {
    const { channel } = msg
    if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('You can\'t use that!');
    if (args.length < 2) {
      msg.reply('Please provide a duration and a reason')
      return
    }

    let duration = args.shift().toLowerCase()
    if (duration === 'off') {
      duration = 0
    }

    if (isNaN(duration)) {
      msg.reply(
        'Please provide either a number of seconds or the word "off"'
      )
      return
    }

    //['testing','hello','world']
    //.join(' ')
    //testing hello world

    channel.setRateLimitPerUser(duration, args.join(' '))
    msg.reply(`The slowmode for this channel has been set to ${duration}`)
  
}