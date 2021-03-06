const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");


module.exports = {
    name: "serverstats",
    aliases: ["st"],
    run: async (client, message, args, text) => {
        const Embed = new Discord.MessageEmbed()
        .setTitle('Server statistics')
        .setColor(Color)
        .addFields({ 
            name: 'Total',
            value: message.guild.members.cache.size,
            inline: false
        }, {
            name: 'Online',
            value: message.guild.members.cache.filter(m => m.user.presence.status === 'online' && !m.user.bot).size,
            inline: true
        }, {
            name: 'Idle',
            value: message.guild.members.cache.filter(m => m.user.presence.status === 'idle' && !m.user.bot).size,
            inline: true
        }, {
            name: 'Do not disturb',
            value: message.guild.members.cache.filter(m => m.user.presence.status === 'dnd' && !m.user.bot).size,
            inline: true
        }, {
            name: 'Offline',
            value: message.guild.members.cache.filter(m => m.user.presence.status === 'offline' && !m.user.bot).size,
            inline: true
        }, {
            name: 'Bots',
            value: message.guild.members.cache.filter(m => m.user.bot).size,
            inline: true
        })
        .setThumbnail(message.guild.iconURL())
        .setFooter(`${message.guild.name}'s Member Statistics`, client.user.displayAvatarURL())
        .setColor(3426654)
        message.channel.send(Embed)
    }
}