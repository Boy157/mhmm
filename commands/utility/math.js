const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "math",
  aliases: ["calc"],
  description: "Calculate something!",
  run: async (client, message, args) => {
    //Start
    const firstValue = Number(args[0]);
    const secondValue = Number(args[2]);
    const thirdValue = Number(args[4]);
    
    if (!args[0]) return message.channel.send(`You have to input an arguments, Example: 1 + 1`);
    if (!firstValue) return message.channel.send('The first value stated is not a number or u need to give space in the middle.');
    if (!args[1]) return message.channel.send('You have to state what you want to do with the number. Here is an option: +, -, *, /');
    if (!['+', '-', '*', '/'].includes(args[1])) return message.channel.send('You have to use the variable: +, -, *, /');
    if (!secondValue) return message.channel.send('The second value stated is not a number or u need to give space in the middle');
    if (!thirdValue) return message.channel.send('The third value stated is not a number or u need to give space in the middle');
    
    if (args[1] == '+') {
      let result = firstValue + secondValue + thirdValue;
      message.channel.send(`${firstValue} + ${secondValue} + ${thirdValue} = ${result}.`);
    }
    
    if (args[1] == '-') {
      let result = firstValue - secondValue;
      message.channel.send(`${firstValue} - ${secondValue} = ${result}.`);
    }
    
    if (args[1] == '*') {
      let result = firstValue * secondValue;
      message.channel.send(`${firstValue} x ${secondValue} = ${result}.`);
    }
    
    if (args[1] == '/') {
      let result = firstValue / secondValue;
      message.channel.send(`${firstValue} : ${secondValue} = **${result}**.`);
    }
  }
}