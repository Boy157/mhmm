require('dotenv').cofig();
const { Client } = require("discord.js");
const client = new Client();
const keepAlive = require('./server.js');

(async () => {
  client.commands = new Map();
  client.prefix = process.env.TOKEN;
  keepAlive();
  await client.login(process.env.TOKEN);
})();