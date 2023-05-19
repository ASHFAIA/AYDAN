const { SlashCommandBuilder } = require('discord.js');
const child_process = require('child_process');
require('dotenv').config();
const AllowedAccounts = process.env.gitAccounts;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('update')
        .setDescription('Pulls the latest update from github'),
    run: ({interaction, client, handler}) => {
        let author = interaction.user.id;
        let processPath = process.env.cmdPath;
        if(AllowedAccounts.includes(author))
        {
            interaction.reply("Pulling updates!")
            child_process.exec(processPath, function(error, stdout, stderr) {
                console.log(stdout);
            })
        }
        else{
            interaction.reply("You do not have the proper permission to do this!")
        }

    }
}
