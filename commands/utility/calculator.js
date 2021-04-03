const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "calculator",
  aliases: ["calc"],
  description: "Calculate something!",
  usage: ".",
  run: async (client, message, args) => {
    //Start
    const firstValue = Number(args[0]);
    const secondValue = Number(args[2]);
    
    if (!args[0]) return message.channel.send(`You have to input an arguments \`${client.prefix}calc number [+, -, *, / ] number\``)
    if (!firstValue) return message.channel.send('The first value stated is not a number');
    if (!args[1]) return message.channel.send('You have to state wwhat you want to do with the number. Here is an option: +, -, *, /');
    if (!['+', '-', '*', '/'].includes(args[1])) return message.channel.send('You have to use the variable: +, -, *, /');
    if (!secondValue) return message.channel.send(`The first value stated is not a number`);