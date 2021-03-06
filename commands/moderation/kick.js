const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "kick",
  aliases: [],
  description: "Kick A Member!",
  usage: "Kick <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete({ timeout: 5000});

    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      )
    .then(msg => msg.delete({ timeout: 5000 }));

    let Member = message.mentions.users.first(); message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]); 

    if (!Member)
      return message.channel.send(
        `Please Provide A Member That You Want To Kick!`
      )
    .then(msg => msg.delete({ timeout: 5000 }));

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Please Provide A Valid Member!`)
    .then(msg => msg.delete({ timeout: 5000 }));

    if (Member.id === message.author.id)
      return message.channel.send(`You Can't Kick Your Self!`)
    .then(msg => msg.delete({ timeout: 5000 }));

    if (Member.id === client.user.id)
      return message.channel.send(`Please Don't Kick Me ;-;`)
    .then(msg => msg.delete({ timeout: 5000 }));

    if (Member.id === message.guild.owner.id)
      return message.channel.send(`You Can't Kick Owner Of Server!`)
    .then(msg => msg.delete({ timeout: 5000 }));

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.kickable)
      return message.channel.send(`I Can't Kick That Member!`)
    .then(msg => msg.delete({ timeout: 5000 }));

    try {
      console.log(`Member Is Going To Get Kick!`);

      setTimeout(function() {
        User.kick({ reason: `${Reason || "No Reason Provided!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Member Kicked!`)
        .addField(`Moderator`, `${message.author.tag}`)
        .addField(`Kicked Member`, `${Member.tag}`)
        .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `You Have Been Kicked From **${message.guild.name}** For ${Reason ||
            "No Reason Provided!"}`
        );
      message.channel.send(embed)
      .then(msg => msg.delete({ timeout: 5000 }));
      console.log(
        `User: ${Member.tag} (${Member.id}) Just Got Kicked From ${
          message.guild.name
        } For ${Reason || "No Reason Provided!"}`
      );
    } catch (error) {
      return message.channel
        .send(
          `I Can't Kick That Member Maybe Member Has Higher Role Than Me & My Role Is Lower Than Member!`
        )
        .then(() => console.log(error));
    }

    //End
  }
};
