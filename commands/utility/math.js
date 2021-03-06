const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const math = require("mathjs");

module.exports = {
  name: "math",
  aliases: ["calc"],
  description: "Calculate something!",
  run: async (client, message, args,) => {
    //Start
    if(!args[0]) return message.channel.send('Please give a question');
    
    let resp;
    
    try {
      resp = math.evaluate(args.join(" "))
    } catch (e) {
      return message.channel.send('Please give a **_valid_** question!!')
    }
    
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('Calculator Online')
    .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
    .addField('Answer', `\`\`\`css\n${resp}\`\`\``)
    .setFooter(`Requested By ${message.author.username}`)

    
    message.channel.send(embed);
  }
}