var Discord = require('discord.js')
var FFmpeg = require('ffmpeg')
var gyp = require('node-gyp')

exports.run = async(client, msg, args) => {
  var connection = await msg.member.voice.channel.join();
  var dispatcher = connection.play('/home/maxxdoshark/song.mp3');


    dispatcher.on('start', () => {
        console.log('audio.mp3 is now playing!');
    });

    dispatcher.on('finish', () => {
        console.log('audio.mp3 has finished playing!');
    });

    // Always remember to handle errors appropriately!
    dispatcher.on('error', console.error);
}


