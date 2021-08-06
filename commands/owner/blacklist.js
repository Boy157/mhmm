const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "blacklist",
  aliases: ["bl"],
  description: "Blacklist someone from this bot!",
  run: async (client, message, args, utils) => {
  
    const userIdMatch = args[0].match(/\d{17,19}/)
    if (!userIdMatch) return message.channel.send('Please provide a valid id')
    const userId = userIdMatch[0]
    
    const user = await client.users.fetch(userId).catch(() => null)
    if (!user) return message.channel.send('user not found')
    
    const doc = await utils.userBlacklists.toggleActivate(user.id)
    if (doc.active) {
      for (const guild of client.guilds.cache.filter(g => g.ownerID === user.id).values()) await guild.leave()
    }
    await message.channel.temp(`user successfully ${doc.active ? 'Blacklisted' : 'Whitelisted'}`)
    
    const masterLogger = client.channels.cache.get('87095757804839732')
    if (masterLogger) {
      return masterLogger.send({
        embed: {
            title: `User ${doc.active ? 'Blacklisted' : 'Whitelisted'}`,
            description: [`\`${message.author.tag}\``,
                          '',
                          '**User:**'
                          `\`${user ? user.tag : userId}\``
                        ].join('\n'),
            color: "BLUE"
                          
        }
      })
    }
  }
  }