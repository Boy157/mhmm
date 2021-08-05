const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "createmute",
  aliases: ['addmute'],
  description: "create mute role",
  run: async (client, message, args) => {
    if (message.author.id !== '723506204537520179') {
            return message.channel.send(`lmao u tried!`)
      
    .then(msg => msg.delete({ timeout: 5000 }));
    }
    
    const muteRole = await message.guild.roles.create({data: {
      name: "Muted",
      color: "BLACK",
      permission:["SEND_MESSAGES"]
      }
    })
  message.guild.channels.cache.forEach(async(channel, id) => {
    await channel.createOverwrite(muteRole, {
      SEND_MESSAGES: false,
      MANAGE_MESSAGES: false
    })
  })
  const created = new MessageEmbed()
  .setTitle("Role Has Been Created")
  .setColor("BLUE")
  message.channel.send(created)
    }
  }
    