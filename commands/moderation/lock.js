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
    
    const role = message.guild.roles.cache.get('777773709997899836');
    let lockChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
    if (!lockChannel) lockChannel = message.channel;
    
    await lockChannel.updateOverwrite(role, {
      SEND_MESSAGES: false
    }).catch(err => console.log(err));
    
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Channel has been locked`)
    .setTimestamp()
    message.channel.send(embed);
  }
}