const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async(client, message, args) => {
    
    
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${client.user.username} Commands!`)
    .setDescription(`**Atreus Available Commands! and ;;help (command) for more information**` + 
    "\n\n**:smile: | Fun**\n`avatar` `coinflip` `howgay` `hug` `meme` `rate` `dicksize` `ascii` `hack` `randomnumber` `dm`" + "\n\n" + 
    "**:tools: | Utility**\n`math` `snipe` `weather` `userinfo` `slowmode` `embed` `nick`" + "\n\n" +
    "**:shield: | Moderation**\n`purge` `nuke` `temmpute` `mute` `unmute` `lock` `unlock` `kick` `ban` `bans` `unban`" + "\n\n"+
    "**:scroll: | Bot Informations**\n`help` `ping` `invite` `uptime`")
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();

    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
