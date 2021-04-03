const Discord = require('discord.js');

module.exports = {
    name: "userinfo",
    aliases: ["user-info", "memberinfo", "guildmemberinfo", "user-i"],
    run: async (client, message, args) => {

    const guild = message.guild;
    const usr = message.mentions.users.first() || message.author
  
    const membero = guild.members.cache.get(usr.id) 

    const usero = membero.user; 

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${usr.tag}`, `${usr.displayAvatarURL({dynamic: true})}`)
    .setThumbnail(`${usr.displayAvatarURL({dynamic: true})}`)
    .setDescription(`${usr}'s Information`)
    .addField(`**ID:**`, `${usr.id}`)
    .addField(`**Avatar URL:**`, `${usr.displayAvatarURL({dynamic: true})}`)
    .addField(`**Nickname (If Applicable):**`, `${membero.nickname || `**Cannot Find A Nickname For This User**`}`)
    .addField(`**Joined Server:**`, `${membero.joinedAt}`)
    .addField(`**Joined Discord:**`, `${usr.createdAt}`)
    .setColor('BLUE')
    message.channel.send(embed);
 }
}