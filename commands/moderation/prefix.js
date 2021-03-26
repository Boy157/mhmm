const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "prefix",
  aliases: [],
  description: "Change prefix!",
  usage: "(prefix) (new prefix)",
  run: async (client, message, args) => {
  let prefix = args.join(" ")
    //Start
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.rep
    (`${message.guild.id}-prefix`, prefix)
    return message.channel.send(`Set the prefix to **${prefix}**`)
    }
}
  