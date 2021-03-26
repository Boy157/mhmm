const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "unlock",
  aliases: ["unlockdown"],
  description: "unlocks a Channel!",
  usage: "unlock <length>",
  run: async (client, message, args) => {
    //Start
    if (!message.member.hasPermission("ADMINISTRATOR")) {
       return message.channel.send(`You don't have enough Permissions`);
    }
    
    message.channel.overwritePermissions([
      {
        id: message.guild.id,
        allow: ["SEND_MESSAGES"]
      }
    ]);
    
    const embed = new Discord.MessageEmbed()
    
      .setDescription(`:lock: Unlocked ${message.channel}`)
      .setColor("BLUE");
    await message.channel.send(embed);
    
  }
};
