var Discord = require('discord.js')
var FFmpeg = require('ffmpeg-static')
var gyp = require('node-gyp')

exports.run = async(client, msg, args) => {
    const channel = client.channels.cache.get("755170422600761354");

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  
}
