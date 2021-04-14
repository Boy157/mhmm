const Discord = require("discord.js");
const { MessageFlags } = require("discord.js");
const { Color } = require("../../config.js");
const db = require("quick.db");

module.exports = {
    name: "prefix",
    aliases: [],
    description: "Change the Prefix",
    run: async (client,message, args, db) => {
       let pre = args[0]
      
      if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send(
          `You Don't Have Permission To Use This Command!`
      );
  
    if (!pre) {
      message.channel.send("You need to specify the new prefix")
    } else {
        db.set(`prefix_${message.guild.id}`, pre)
        message.channel.send(`Your new prefix is ${pre}`);
    }  
  }
}