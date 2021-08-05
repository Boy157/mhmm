const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "uptime",
  aliases: [],
  description: "no!",
  run: async (client, message, args) => {
    
    let days = Math.floor(client.uptime / 86400000)
    let hours = Math.floor(client.uptime/ 3600000) % 24
    let minutes = Math.floor(client.uptime / 60000) % 60
    let seconds = Math.floor(client.uptime / 1000) % 60
    
    const uptimeembed = new Discord.MessageEmbed()
     .setAuthor('Atreus')
     .setColor('BLUE')
     .addField(':satellite: UPTIME', `${days}days ${hours}hrs ${minutes}min ${seconds}sec`, true)
    
    .setTimestamp(Date())
    
    message.channel.send(uptimeembed)
  }
}