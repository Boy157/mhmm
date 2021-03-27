const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
  disabledEveryone: true
});
const db = require("quick.db");
const fetch = require("node-fetch");
const Enmap = require('enmap');
const { Prefix, Color } = require("./config.js");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.on("ready", async () => {
  console.log(`Ready`);
  client.user
    .setActivity(`Nothing`, { type: "PLAYING" })
    .catch(error => console.log(error));
});

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

let modules = ["fun", "info", "moderation"];

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
  
let pref = db.get(`prefix.${message.guild.id}`);
let prefix;
  if (!pref) {
    prefix = ";;";
  } else {
    prefix = pref;
  }

  if (!message.content.startsWith(Prefix)) return;
  
  let args = message.content.slice (prefix.length).trim().split(/ +/g);
  let msg = message.content.toLowerCase();
  let cmd = args.shift().toLowerCase();

  message.flags = [];
  while (args[0] && args [0][0] === ".") {
    message.flags.push(args.shift().slice(1));
  } 
  
  if (msg.startsWith(prefix + "prefix")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You dont have enough permission");
    let data = db.get(`prefix.${message.guild.id}`);
    if (message.flags[0] === "default") {
      await db.delete(`prefix.${message.guild.id}`);
      return message.channel.send("Prefix has been changed to default.");
    }
    
    let symbol = args.join(" ");
    if (!symbol) return message.channel.send("Please input the prefix.");
    
    db.set(`prefix.${message.guild.id}`, symbol);
    return message.channel.send(`Prefix has been changed to **${symbol}**`);
  }
  
  
  if (cmd.length === 0) return;

  let command =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if (!command) return;

  if (command) {
    if (!message.guild.me.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "I Don't Have Enough Permission To Use This Or Any Of My Commands | Require : Administrator"
      );
    command.run(client, message, args);
  }
  console.log(
    `User : ${message.author.tag} (${message.author.id}) Server : ${message.guild.name} (${message.guild.id}) Command : ${command.name}`
  );
});

setInterval(async () => {
  await fetch("https://aiuwhdiuawhdiuawduhaw.glitch.me").then(console.log("Pinged!"));
}, 240000 );

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
