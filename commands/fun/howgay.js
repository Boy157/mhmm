const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "howgay",
  aliases: [],
  description: "Show How Gay Member Is!",
  usage: "Howgay <Mention Member>",
  run: async (client, message, args) => {
    //Start
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]); 
      message.member;

    let Result = Math.floor(Math.random() * 101);

    let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Gay Machine`)
      .setDescription(`${Member.user.username} Is ${Result}% Gay 🏳️‍🌈`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};