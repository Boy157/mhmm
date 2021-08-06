const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "nuke",
  aliases: [],
  description: "Nuke a channel!!",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
            message.channel.send('**NUKE INCOMING!**')
            let channel = message.guild.channels.cache.get(message.channel.id)
            var position = channel.position
            
            channel.clone().then((channel2) => {
                channel2.setPosition(position)
                channel.delete()
                channel2.send('**NUKED CHANNEL SUCCESSFULLY**')
            })

    
    
         }
  }