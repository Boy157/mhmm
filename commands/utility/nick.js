const Discord = require("discord.js");
const { MessageFlags } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
    name: "nick",
    aliases: ["nick"],
    description: "Change members nickname",
    run: async (client, message, args) => {
      
      if (!message.member.hasPermission("MANAGE_SERVER"))
        return message.channel.send(
          `You Don't Have Permission To Use This Command!`
      );
      
      const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]); 
      const nickName = args.slice(1).join(" ");
      
      if (!args[0]) return message.channel.send("You have to provide a member")
      if (!Member) return message.channel.send("Cant found the member");
      if (!nickName) return message.channel.send("Please provide a new nickname");
      if (!Member.bannable) return message.channel.send("Sorry, i cant change the new nickname.");
    
      
      await Member.setNickname(nickName).catch(err => console.log(err)
        && message.channel.send("Cant added that nickname"))
      try {
      return message.channel.send("I have changed that member's nickname");
    } 
      catch {
      return message.channel.send("Unknown")
    }
    }
  }