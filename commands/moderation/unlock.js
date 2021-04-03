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
    
    const role = message.guild.roles.cache.get('777773709997899836');
    let lockChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
    if (!lockChannel) lockChannel = message.channel;
    
    await lockChannel.updateOverwrite(role, {
      SEND_MESSAGES: true
    }).catch(err => console.log(err));
    
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`:unlock: | Channel has been unlocked!!`)
    message.channel.send(embed);
  }
}
