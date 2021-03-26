const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");


module.exports = {
    name: "ram",
    aliases: [],
    run: async (client, message, args) => {
      const ramdt = (`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB Ram`);
      
      const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setDescription(ramdt)
      message.channel.send(embed)
    }
  }