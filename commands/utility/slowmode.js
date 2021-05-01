const Discord = require("discord.js");
const { MessageFlags } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
    name: "slowmode",
    aliases: ["slow", "sm"],
    argsType: 'multiple',
    description: "Change the slowmode durations",
    run: async (client, message, args) => {
      
      if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send(
          `You Don't Have Permission To Use This Command!`
      );

      const { channel } = message
      
      if (args.length < 1) {message.reply('Please set a new duration without variable!!, example: <prefix>slowmode **5**.)') 
        return
      }
      
      let duration = args.shift().toLowerCase()
      if (duration === 'off') {
        duration = 0
      }
      
      if (isNaN(duration)) {
        message.reply(
          'Please give a right number.'
        )
        return
      }
      
      channel.setRateLimitPerUser(duration, args.join(' '))
      message.reply(`The slowmode for this channel has been set to ${duration} sec`)
    }
  }