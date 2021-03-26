const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = require('discord-prefix');

module.exports = {
  name: "mute",
  aliases: [],
  description: "Mute A User!",
  usage: "Mute <Mention User> | <Reason>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

//if the server doesn't have a set prefix yet
let defaultPrefix = '!';

client.on('message' (message) => {
    //stop code execution if message is received in DMs
    if (!message.guild) return;

    //get the prefix for the discord server
    let guildPrefix = prefix.getPrefix(message.guild.id);

    //set prefix to the default prefix if there isn't one
    if (!guildPrefix) guildPrefix = defaultPrefix;

    //rest of the message event
    let args = message.content.slice(guildPrefix.length).split(' ');
    if (!message.content.startsWith(guildPrefix)) return;
    if (args[0].toLowerCase() === 'ping') {
        return message.channel.send('Pong!');
    };
});

client.login('token');