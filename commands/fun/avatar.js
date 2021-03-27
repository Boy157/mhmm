const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name:"avatar",
  aliases:["av"],
  description:"Show your profile photo",
  usage:"avatar / avatar @user / avatar userID",
  run: async(client,message,args)=> {
   let user;
    if(!args[0]) user = message.author
    if(args[0] && isNaN(args[0])) user = message.mentions.users.first()
    if(args[0] && !isNaN(args[0])) {
        user = client.users.cache.get(args[0])
    
      if(!message.guild.members.cache.has(args[0])) return message.reply(":x: User not found")
    
  }
  
  if(!user.avatarURL()) return message.reply(`:x: ${user.tag} profile photo not found`)
  let embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setDescription(`[PNG](${user.avatarURL({format: "png"})})`)
   .setImage(user.avatarURL({dynamic: true})+"?size=4096") //Size :D
   .setTimestamp()
   .setAuthor(user.tag,user.avatarURL())
  
    message.channel.send(embed)
  }
}