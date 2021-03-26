const { MessageEmbed } = require('discord.js');
 
module.exports = {
    name: 'status',
    aliases: [],
    run: async (client, message, args) => {

        if(!message.author.id === '723506204537520179') return;

        const content = args.join(" ")
        const splitt = content.split('');

        const lol = new MessageEmbed()
        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
        .setDescription("<a:negative_squared_cross_mark:793709920104480769> Please enter a status type!")
        .setColor('BLUE')
        if (!splitt[0]) return message.channel.send(lol);


            if(content === 'dnd') {
                client.user.setStatus('dnd')
                const sux = new MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                    .setDescription("<a:no_entry:793709920104480769> Status changed to `do not disturb`!")
                    .setColor('BLUE')
                    message.channel.send(sux)
            } else {
                if(content === 'online') {
                    client.user.setStatus('online')
                    const sux = new MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                    .setDescription("<a:online:793709920104480769> Status changed to `online`!")
                    .setColor('BLUE')
                    message.channel.send(sux)
                } else {
                    if(content === 'idle') {
                        client.user.setStatus('idle')
                        const sux = new MessageEmbed()
                    .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                    .setDescription("<a:crescent_moon:793709920104480769> Status changed to `idle`!")
                    .setColor('BLUE')
                    message.channel.send(sux)
                    } else {
                        if(content != ['dnd', 'online', 'idle']) {
                            const meh = new MessageEmbed()
                            .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`)
                            .setDescription(`<a:negative_squared_cross_mark:793709920104480769> Please enter a **valid** status type!
                            **Options:**
                            dnd (do not disturb)
                            online
                            idle`)
                            .setColor('BLUE')
                            return message.channel.send(meh)
                        } 
                    
                }
            }
        }
 
    }
}