const Discord = require("discord.js");
const { MessageFlags } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
    name: "stopspam",
    aliases: [],
    description: "lmao",
    run: async (bot, message, args) => {
            if (message.author.id !== '723506204537520179') {
            return message.channel.send(`lmao u tried!`)
      }
      await message.channel.send(`Ok got it.`)
        process.exit(1);
  }
}