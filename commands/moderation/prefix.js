const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const Prefix = require("enmap");

module.exports = {
  name: "prefix",
  aliases: [],
  description: "Change prefix!",
  usage: "(prefix) (new prefix)",
  run: async (client, message, args) => {
  let prefix = args.join(" ")
    //Start
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You dont have a permission to use this command!")
    if(!prefix) return message.reply("Please enter a new prefix");
    (`${message.guild.id}-prefix`, prefix)
    return message.channel.send(`Set the prefix to **${prefix}**`)
    }
}
  