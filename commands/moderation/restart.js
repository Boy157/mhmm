const Discord = require("discord.js");
const { MessageFlags } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
    name: "restart",
    aliases: ["reboot"],
    description: "restart the bot",
    run: async (client, message, args,) => {
        if (message.author.id !== '723506204537520179') {
            return message.channel.send(`You Don't Have Permission To Use This Command!`)
          
        if (!args[0]) return message.channel.send("You must input a category.");
        if (!args[1]) return message.channel.send("You must input a command name.");
        
        let category = args[0].toLowerCase();
        let command = args[1].toLowerCase();
        
        try {
          delete require.cache
        }
        }
    }
  
}      