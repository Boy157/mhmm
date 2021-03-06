const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "coinflip",
  aliases: ["toss", "flip", "cf"],
  description: "Flip A Coin!",
  usage: "Coinflip",
  run: async (client, message, args) => {
    //Start
    const coins = ["Heads", "Tails"];

    let result = Math.floor(Math.random() * coins.length);

    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`The result is`)
      .setDescription(coins[result])
      .setFooter(`Fliped by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};