const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const ms = require("ms");

module.exports = {
  name: "mute",
  aliases: [],
  description: "Mute A User!",
  usage: "Mute <Mention User> | <Reason>",
  run: async (client, message, args) => {
    //Start
    message.delete({ timeout: 5000});
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]); 

    if (!Member) return message.channel.send(`Please provide a user!`);

    let Role = message.guild.roles.cache.find(role => role.name === "Muted").id;

    if (!Role)
      return message.channel.send(
        `Please Create Mute Role | Role Name : Muted`
      );

    if (Member.roles.cache.has(Role)) {
      return message.channel.send(`Member Is Already Muted!`);
    }
    let Reason = args.slice(1).join(" ");
    let User = message.guild.member(Member);

    if (!User.bannable) return message.channel.send(`I Can't Mute That Member!`);
    
    if(!Member.roles.highest.position >= message.member.roles.highest.position) return message.chanel.send('You cant mute a member that higher than you')

    let Embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Member Muted!`)
      .addField(`Moderator`, `_${message.author.tag}_`)
      .addField(`Muted Member`, `_${Member.user.tag}_`)
      .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
    
    
    
    if (Role && !Member.roles.cache.has(Role)) {
      Member.roles.add([Role]);
      return message.channel.send(Embed)
      .then(msg => msg.delete({ timeout: 5000 }));
    } else {
      return message.channel.send(`Something Went Wrong, Try Again Later!`);
    }

    //End
  }
};
