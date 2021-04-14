const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "embed",
  aliases: [],
  description: "make an embed message!",
  usage: "<title> <description> <footer>",
  run: async (client, message, args) => {
    
    let embed = null;
    const channel = message.mentions.channels.first();
    if (!channel) return message.channel.send('Please specify a valid channel')
    args.shift();
    
    const arg = args.join(" ");
    const title = arg.split('"')[0];
    if (!title) return message.channel.send('Please give a valid tittle')
    const description = arg.split('"')[1];
    if (!description) return message.channel.send('Please give a valid description')
    const footer = arg.split('"')[2];
    if (!footer) return message.channel.send('Please give a valid footer')
    
    const color = `#${arg.split('"')[3]}`
    const thumbnail = arg.split('"')[4]
    const image = arg.split('"')[5]
    
    if (!color, thumbnail, image) {
      let embed = new Discord.MessageEmbed()
      .setTitle(title)
      .setDescription(description)
      .setFooter(footer);
      message.channel.send(embed);
    } else if (![thumbnail, image]) {
      let embed = new Discord.MessageEmbed()
      .setTitle(title)
      .setDescription(description)
      .setFooter(footer)
      .setColor("RANDOM");
      message.channel.send(embed);
    } else if (!image) {
      let embed = new Discord.MessageEmbed()
      .setTitle(title)
      .setDescription(description)
      .setFooter(footer)
      .setColor("RANDOM")
      .setThumbnail(thumbnail);
      message.channel.send(embed);
    } else if ([color, thumbnail, image]) {
      let embed = new Discord.MessageEmbed()
      .setTitle(title)
      .setDescription(description)
      .setFooter(footer)
      .setColor("RANDOM")
      .setThumbnail(thumbnail)
      .setImage(image);
      message.channel.send(embed);
    }
  }
}