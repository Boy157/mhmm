const Discord = require("discord.js");
const { MessageFlags } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
    name: "invitebot",
    aliases: [],
    description: "invite me to ur server",
    run: async (client, message, args) => {
        
        let msg;
        let textChannel = message.mentions.channels.first()
    
        if(textChannel) {
            msg = args.slice(1).join();
            textChannel.send
      } else {
          msg = args.join(" ");
          message.channel.send;
      }
  
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Invite Me!`)
        .setDescription(`[Click here to invite](https://discord.com/api/oauth2/authorize?client_id=785314685653745695&permissions=8&scope=bot)`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
        message.channel.send(embed);
    }
}