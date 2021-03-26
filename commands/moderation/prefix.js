const Discord = require("discord.js");
const { Prefix } = require("../../config.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const db = require("quick.db");

module.exports = {
  name: "prefix",
  aliases: [],
  description: "Change bot prefix",
  run: async (client, message, args) => {
     
     if(!message.member.hasPermission("ADMINISTRATOR")) {
       return message.channel.send("You cant use this command")
     }
    
    if(!args[0]) {
      return message.channel.send("Please give a new prefix")
    }
    
    
    if(args[0].length > 3) {
      return message.channel.send("You cant set a new prefix with more than 3 characters")
    }
    
    if(args.join("") === exports.Prefix) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("New prefix has been set up")
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(`New prefix is ${args[0]}`)
    
  }
}