const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "unban",
  aliases: [],
  description: "Unban A Member!",
  usage: "Unban <Member ID>",
  run: async (client, message, args) => {
    //Start
  message.delete({ timeout: 5000});
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      )
    .then(msg => msg.delete({ timeout: 5000 }));

    if (!args[0])
      return message.channel.send(
        `Please Give Me Member ID That You Want To Unban!`
      )
    .then(msg => msg.delete({ timeout: 5000 }));

    if (isNaN(args[0])) return message.channel.send(`Please Give Me Valid ID!`)
    .then(msg => msg.delete({ timeout: 5000 }));

    if (args[0] === message.author.id)
      return message.channel.send(`You Are Already Unban!`)
    .then(msg => msg.delete({ timeout: 5000 }));

    if (args[0] === message.guild.owner.user.id)
      return message.channel.send(`Server Owner Is Already Unban!`)
    .then(msg => msg.delete({ timeout: 5000 }));

    if (args[0] === client.user.id)
      return message.channel.send(`I Am Already Unban!`)
    .then(msg => msg.delete({ timeout: 5000 }));

    let FetchBan = await message.guild.fetchBans();

    let Member;
    Member =
      FetchBan.find(
        b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      FetchBan.get(args[0]) ||
      FetchBan.find(
        bm => bm.user.tag.toLowerCase() === args[0].toLocaleLowerCase()
      );

    if (!Member)
      return message.channel.send(
        "Please Give Valid Member ID Or Member Is Not Banned!"
      )
    .then(msg => msg.delete({ timeout: 5000 }));

    let Reason = args.slice(1).join(" ") || "No Reason Provided!";

    try {
      message.guild.members.unban(Member.user.id, Reason);
    } catch (error) {
      return message.channel.send(
        `I Can't Unban That Member Maybe Member Is Not Banned Or Some Error!`
      );
    }

    let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Member Unbanned!`)
      .addField(`Moderator`, `${message.author.tag}}`)
      .addField(`Unbanned Member`, `${Member.user.tag}`)
      .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    return message.channel.send(embed)
    .then(msg => msg.delete({ timeout: 5000 }));

    //End
  }
};