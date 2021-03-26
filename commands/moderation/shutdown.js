const Discord = require("discord.js");
const { MessageFlags } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
    name: "shutdown",
    aliases: ["sd"],
    description: "Shut down ur bot",
    permissionError: `You dont have permission to use this command.`,
    run: async (bot, message, args) => {
      
      if (message.author != '723506204537520179') return
      await message.reply("Shutting Down...")
      process.exit()
  
    }
  }
  