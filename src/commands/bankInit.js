const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('initbank')
        .setDescription('Initialize the banking system for the server.'),
    run: ({ interaction, client, handler }) =>{
        
    }
}