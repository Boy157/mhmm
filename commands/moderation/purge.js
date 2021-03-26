const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "purge",
  aliases: ["clear", "clearmsgs"],
  description: "Purge Your Messages!",
  usage: "Purge <Message Amount> (Max = 100)",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

    if (!args[0])
      return message.channel.send(`Please Give Me Amounts Of Messages!`);

    if (isNaN(args[0]))
      return message.channel.send(`Please Give Me Number Value!`);

    if (args[0] < 0)
      return message.channel.send(
        `You Can Delete ${args[0]} By Your Self Its Not Too Many Messages!`
      );

    if (args[0] > 100)
      return message.channel.send(
        `I Can't Delete ${args[0]} Because Of Discord Limit!`
      );

    let Reason = args.slice(0).join(" ") || "No Reason Provided!";

    message.channel.bulkDelete(args[0]).then(Message => {
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Messages Deleted!`)
        .addField(`Moderator`, `${message.author.tag}`)
        .addField(`Channel`, `${message.channel.name}`)
        .addField(`Deleted Messages`, `${Message.size}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      return message.channel
        .send(embed)
        .then(msg => msg.delete({ timeout: 2500 }));
    });

    //End
  }
};