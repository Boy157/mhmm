const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
    name: 'hug',
    aliases: [],
    description: "hugs a member member",
    run: async (client, message, args) => {
        const member = message.mentions.users.first();
       if (!member) return message.channel.send('Please mention a member!!')
        var list = [
            'https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif', 
             'https://media4.giphy.com/media/l2QDM9Jnim1YVILXa/source.gif',
             'https://media2.giphy.com/media/od5H3PmEG5EVq/200.gif',
              'https://i.imgur.com/r9aU2xv.gif?noredirect',
              'https://acegif.com/wp-content/uploads/anime-hug.gif',



            //etc.
        ];

        var rand = list[Math.floor(Math.random() * list.length)];
        const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('This sweet hug for you')
            // .setURL()
            .setDescription(member)
            .setImage(rand)

        message.channel.send(newEmbed);
        // message.channel.send(member, { embed: newEmbed });

     }
   }