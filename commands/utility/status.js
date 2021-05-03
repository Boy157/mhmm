const { MessageEmbed } = require('discord.js');
 
module.exports = {
    name: 'status',
    aliases: [],
    run: async (client, message, args) => {
        if (message.author.id !== '723506204537520179') {
           return message.channel.send(`You Don't Have Permission To Use This Command!`)
        }
      
        const content = args.join(" ")
        const splitt = content.split('');

        const lol = new MessageEmbed()
        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
        .setDescription(":no_entry_sign: Please enter a status type!")
        .setColor('RANDOM')
        if (!splitt[0]) return message.channel.send(lol);


            if(content === 'dnd') {
                client.user.setStatus('dnd')
                const sux = new MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                    .setDescription(":no_entry: | Status changed to `do not disturb`!")
                    .setColor('RANDOM')
                    message.channel.send(sux)
            } else {
                if(content === 'online') {
                    client.user.setStatus('online')
                    const sux = new MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                    .setDescription(":green_circle: | Status changed to `online`!")
                    .setColor('RANDOM')
                    message.channel.send(sux)
                } else {
                    if(content === 'idle') {
                        client.user.setStatus('idle')
                        const sux = new MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                    .setDescription(":crescent_moon: | Status changed to `idle`!")
                    .setColor('RANDOM')
                    message.channel.send(sux)
                    } else {
                        if(content != ['dnd', 'online', 'idle']) {
                            const meh = new MessageEmbed()
                            .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                            .setDescription(`<a:exclamation:793709920104480769> Please enter a **valid** status type!
                            **Options:**
                            dnd (do not disturb)
                            online
                            idle`)
                            .setColor('RANDOM')
                            return message.channel.send(meh)
                        } 
                    
                }
            }
        }
 
    }
}