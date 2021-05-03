const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
  disabledEveryone: true
});
const db = require("quick.db");
const express = require("express");
let PREFIX
const server = express();
const fetch = require("node-fetch");
const Prefix = (";;");
const Color = ("RANDOM");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.on("ready", async () => {
  console.log(`Ready`);
  
  function pickStatus() {
    let status = ['Nothing', 'Game', ';;help'];
    let Status = Math.floor(Math.random() * status.length);
    
    client.user.setActivity(status[Status], {
      type: "PLAYING"
    });
  };
  setInterval(pickStatus, 9000);
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("server is ready!!" + Date.now());
  });
}

module.exports = keepAlive;

client.on("message", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
    return message.channel.send(`Bot Prefix : ${Prefix}`);
  }
});

let modules = ["fun", "info", "utility", "moderation"];

modules.forEach(function(module) {
  fs.readdir(`./commands/${module}`, function(err, files) {
    if (err)
      return new Error(
        "Missing Folder Of Commands! Example : Commands/<Folder>/<Command>.js"
      );
    files.forEach(function(file) {
      if (!file.endsWith(".js")) return;
      let command = require(`./commands/${module}/${file}`);
      console.log(`${command.name} Command Has Been Loaded - ✅`);
      if (command.name) client.commands.set(command.name, command);
      if (command.aliases) {
        command.aliases.forEach(alias =>
          client.aliases.set(alias, command.name)
        );
      }
      if (command.aliases.length === 0) command.aliases = null;
    });
  });
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
 
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (!message.content.startsWith(Prefix)) return;

  const args = message.content
    .slice(Prefix.length)
    .trim()
    .split(" ");
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if (!command) return;

  if (command) {
    if (!message.guild.me.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "I Don't Have Enough Permission To Use This Or Any Of My Commands | Require : Administrator"
      );
    command.run(client, message, args, db);
  }
  console.log(
    `User : ${message.author.tag} (${message.author.id}) Server : ${message.guild.name} (${message.guild.id}) Command : ${command.name}`
  );
});

setInterval(async () => {
  await fetch("https://tricky-southern-gem.glitch.me").then(
    console.log("Pinged!")
  );
}, 240000);

client.snipe = new Map();

client.on("messageDelete", async (message, channel) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  client.snipe.set(message.channel.id, {
    msg: message.content,
    user: message.author.tag,
    profilephoto: message.author.displayAvatarURL(),
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});
client.login(process.env.Token);
