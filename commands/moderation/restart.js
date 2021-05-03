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
        }
        await message.channel.send(`Restarting bot...`)
        process.exit(1);
    }
  
}      