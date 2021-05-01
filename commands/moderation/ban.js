const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ban",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  cooldown: "3000",
  run: async (client, message) => {
    //Start
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );
    
    let messageArray = message.content.split(" ")
    let args = messageArray.slice(1)
    
    let Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]); 

    if (!Member)
      return message.channel.send(
        `Please Provide A Member That You Want To Ban!`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Please Provide A Valid Member!`);

    if (Member.id === message.author.id)
      return message.channel.send(`You Can't Ban Your Self!`);

    if (Member.id === client.user.id)
      return message.channel.send(`Please Don't Ban Me :'(`);

    if (Member.id === message.guild.owner.id)
      return message.channel.send(`You Can't Ban Owner Of Server!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.bannable) return message.channel.send(`I Can't Ban That Member!`);

    try {
      console.log(`Member Is Going To Get Ban!`);
      setTimeout(function() {
        User.ban({ reason: `${Reason || "No Reason Provided!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Member Banned!`)
        .addField(`Moderator`, `${message.author.tag}`)
        .addField(`Banned Member`, `${Member.user.tag}`)
        .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
    
      if (User && Member.bot === false)
        Member.send(
          `You Have Been Banned From **${message.guild.name}** For ${Reason ||
            "No Reason Provided!"}`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} (${Member.id}) Just Got Banned From ${
          message.guild.name
        } For ${Reason || "No Reason Provided!"}`
      );
  } catch (error) {
      return message.channel
        .send(
          `I Can't Ban That Member Maybe Member Has Higher Role Than Me & My Role Is Lower Than Him!`
        )
        .then(() => console.log(error));
    }
    //End
  }
};

