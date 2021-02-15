
import { Client, MessageEmbedOptions, Message, Intents, MessageEmbed } from 'discord.js';
import { TextChannel } from 'discord.js';



import { token, prefix, serverid, automated_channel } from './config.json';

const client = new Client();

client.on('ready', () => {
    
  

    const eEmbed = new MessageEmbed({
        title: "Fun Fact #1",
        description: "If your ever tired sit down!"
    })
    const eEmbed2 = new MessageEmbed({
        title: "Fun Fact #2",
        description: "You can swear in #exclusive-chat"
    })

    const eEmbed3 = new MessageEmbed({
        title: "Fun Fact #3",
        description: "Maxx Is hot"
    })

    var exampleArray = new Array(
        eEmbed,
        eEmbed2,
        eEmbed3
    );

    var item = exampleArray[Math.floor(Math.random() * exampleArray.length)];

  console.log(`Connected as ${client.user.tag}`);

  const guild = client.guilds.cache.get(serverid);
  if (!guild) {
    console.log('Guild not found');

    return;
  }

  let channel = client.guilds.cache.get(serverid).channels.cache.get(automated_channel);


  let timerId = setInterval(() =>   (channel as TextChannel).send(item), 2000000)
  let timerId2 = setInterval(() =>    item = exampleArray[Math.floor(Math.random() * exampleArray.length)], 200001)
  
});

client.login(token)