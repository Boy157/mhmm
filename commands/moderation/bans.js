const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "bans",
  aliases: [],
  description: "list of bans",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      )
    .then(msg => msg.delete({ timeout: 5000 }));
    
    var amount = 1
    const fetchBans = message.guild.fetchBans()
    const bannedMembers = (await fetchBans).map((member) => `> __${amount++}.__ **${member.user.tag}** | (*${member.user.id}*)`).join("\n")
    const bansEmbed = new Discord.MessageEmbed()
    .setAuthor(`Bans for ${message.guild.name}`, message.guild.iconURL({ dynamic: true}))
    .setDescription(`${bannedMembers}`)
    .setFooter(`Amount: ${amount - 1}`)
    .setTimestamp()
    .setColor("BLUE")
    message.channel.send(bansEmbed)
  }
}