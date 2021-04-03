const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "calculator",
  aliases: ["calc"],
  description: "Calculate something!",
  usage: "<prefix>calculate ",
  run: async (client, message, args) => {
    //Start