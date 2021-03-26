const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "lock",
  aliases: ["lockdown"],
  description: "Locks a Channel!",
  usage: "lock <length>",
  run: async (client, message, args) =>{
    //start
    if (!message.member.hasPermission("ADMINISTRATOR")) {
       return message.channel.send(
        `You dont have enough Permissions`
      );
    }
    
    message.channel.overwritePermissions([
      {
        id: message.guild.id,
        deny: ["SEND_MESSAGES"]
      }
    ]);
    
    const embed = new Discord.MessageEmbed()
    
      .setDescription(`:lock: Locked down ${message.channel}`)
      .setColor("BLUE");
    await message.channel.send(embed);
    
  }
};