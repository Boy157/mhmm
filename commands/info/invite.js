const Discord = require("discord.js");
const { MessageFlags } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
    name: "invite",
    aliases: [],
    description: "invite",
    run: async (bot, message, args) => {
      message.delete();
      let msg;
        let textChannel = message.mentions.channels.first()
    
        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send('https://discord.gg/HCnbjPJM7Y')
      } else {
          msg = args.join(" ");
          message.channel.send('https://discord.gg/HCnbjPJM7Y')
      }
   }
}