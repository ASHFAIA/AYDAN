const { SlashCommandBuilder } = require('discord.js');
const child_process = require('child_process');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const AllowedAccounts = process.env.gitAccounts;

function saveData(filePath, data)
{   
    fs.writeFile(filePath, JSON.stringify(data, null, 2),'utf8', callback)
}


module.exports = {
    data: new SlashCommandBuilder()
        .setName('update')
        .setDescription('Pulls the latest update from github'),
    run: ({interaction, client, handler}) => {
        let author = interaction.user.id;
        let processPath = process.env.updateBotPath;
        if(AllowedAccounts.includes(author))
        {
            interaction.reply("Pulling updates!");
            let Filepath = path.resolve(__dirname+"/../../updateRanIn.json");
            let f = require(Filepath);
            f.msg = interaction;
            saveData(Filepath, f);
            child_process.exec(processPath, function(error, stdout, stderr) {
                console.log(stdout);
            })
        }
        else{
            interaction.reply("You do not have the proper permission to do this!")
        }

    }
}
