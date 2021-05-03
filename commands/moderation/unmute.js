const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "unmute",
  aliases: [],
  description: "Unmute A User!",
  usage: "Unmute <Mention User>",
  run: async (client, message, args) => {
    //Start
    message.delete({ timeout: 5000});
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(`You Don't Have Permission To Use This Command!`)
      .then(msg => msg.delete({ timeout: 5000 }));

    

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) || 
      message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

    if (!Member) return message.channel.send(`Please Provide a valid user!`) 
      .then(msg => msg.delete({ timeout: 5000 }));


    let Role = message.guild.roles.cache.find(role => role.name === "Muted").id;

    if (!Role)
      return message.channel.send(
        `There Is No Mute Role, So Member Is Not Muted Anymore!`)
      .then(msg => msg.delete({ timeout: 5000 }));

    if (!Member.roles.cache.has(Role)) {
      return message.channel.send(`Member Is Already Unmuted!`)
      .then(msg => msg.delete({ timeout: 5000 }));
    }
    let Reason = args.slice(1).join(" ");


    let Embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Member Unmuted!`)
      .addField(`Moderator`, `${message.author.tag}`)
      .addField(`Unmuted Member`, `${Member.user.tag}`)
      .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    if (Role && Member.roles.cache.has(Role)) {
      Member.roles.remove([Role]);
      return message.channel.send(Embed)
      .then(msg => msg.delete({ timeout: 5000 }));
    } else {
      return message.channel.send(`Something Went Wrong, Try Again Later!`);
    }

    //End
  }
};