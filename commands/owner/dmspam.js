const Discord = require("discord.js");
const { MessageFlags } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
    name: "dmspam",
    aliases: [],
    description: "lmao",
    run: async (bot, message, args) => {
            if (message.author.id !== '723506204537520179') {
            return message.channel.send(`lmao u tried!`)
      }
      if(!args[0]) return message.channel.send("Please provide a valid member.")
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]); 
    if(!user) return message.channel.send("Sorry, no user found.");
    const reason = args.slice(1).join(" ");
    if(!reason) return message.channel.send("Please give a message that you want to send!.")
      setInterval(function() {
       user.send(args.slice(0).join(" "))
      },)
      
    
    try {
      await user.send(args.slice(1).join(" "))
      return message.channel.send("I have dmed the user.");
    }
      catch {
      return message.channel.send("The user can't be dm.")
    }
      setTimeout(() => {
      }, 1000)
}
  }