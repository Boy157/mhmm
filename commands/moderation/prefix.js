const prefix = require("discord-prefix");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const data = await prefix.findOne({
        GuildID: message.guild.id
    });

    if (!args[0]) return message.channel.send('You must provide a **new prefix**!');

    if (args[0].length > 5) return message.channel.send('Your new prefix must be under \`5\` characters!')

    if (data) {
        await prefix.findOneAndRemove({
            GuildID: message.guild.id
        })
        
        message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

        let newData = new prefix({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    } else if (!data) {
        message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

        let newData = new prefix({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    }

}

module.exports.config = {
    name: "setprefix",
    aliases: []
}