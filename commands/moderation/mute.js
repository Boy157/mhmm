const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const ms = require('ms');

module.exports = {
  name: "mute",
  aliases: [],
  description: "Mute A User!",
  usage: "Mute <Mention User> | <Reason>",
  run: async (client, message, args) => {
    //Start
    
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

    let muteUser =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!muteUser) return message.channel.send(`Please Mention A User!`);

    let MuteRole = message.guild.roles.cache.find(role => role.name === "Muted").id;

    if (!MuteRole)
      return message.channel.send(
        `Please Create Mute Role | Role Name : Muted`
      );

    if (muteUser.roles.cache.has(Role)) {
      return message.channel.send(`Member Is Already Muted!`);
    }
    let time = args[1];
    let Reason = args.slice(2).join(" ");
    let User = message.guild.member(Member);

    if (!User.bannable) return message.channel.send(`I Can't Mute That Member!`);
    
    if(!muteUser.roles.highest.position >= message.member.roles.highest.position) return message.chanel.send('You cant mute a member that higher than you')

    let Embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Member Muted!`)
      .addField(`Moderator`, `${message.author.tag}`)
      .addField(`Muted Member`, `${Member.user.tag}`)
      .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
      .addField(`Duration`, `${time}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
    
    
  	timeout(minutes, muteUser, muteRole, message)

    function timeout(minutes, muteUser, mutedRole, message) {
      setTimeout(async function () {
        muteUser.roles.remove(mutedRole);
              
    }, ms (time));

    if (Role && !Member.roles.cache.has(Role)) {
      Member.roles.add([Role]);
      return message.channel.send(Embed);
    } else {
      return message.channel.send(`Something Went Wrong, Try Again Later!`);
    }