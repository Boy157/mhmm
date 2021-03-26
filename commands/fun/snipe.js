const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "snipe",
  aliases: [],
  description: "snipe a message!",
  run: async (client, message, args) => {
    let snip = client.snipe.get(message.channel.id)

    if(!snip) return message.channel.send(":x: Didnt Found Anything.")

    let embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setAuthor(snip.user,snip.profilephoto)
    .setDescription(`**Message:** \`${snip.msg}\``)
    .setTimestamp(snip.date)
    if(snip.image) embed.setImage(snip.image)

    message.channel.send(embed)

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliase:["snip"]
}
  }
}  