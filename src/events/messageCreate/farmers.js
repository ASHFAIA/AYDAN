const { SlashCommandBuilder } = require('discord.js')

module.exports = (msg, client, handler) => {
    let string = 'we are farmers';
    if(msg.content.toLowerCase().includes(string)) msg.reply("Imagine being a farmer lol!");
}