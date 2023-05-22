const { SlashCommandBuilder } = require('discord.js');
const child_process = require('child_process');
const fs = require('fs');
require('dotenv').config();
const AllowedAccounts = process.env.gitAccounts;

function saveData(filePath, data)
{   
    fs.writeFile(filePath, JSON.stringify(data, null, 2), function writeJSON(err) {
        if (err) return console.log(err);
})}


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
            let path = __dirname+"/../../data/updateRanIn.json";
            let json = require(path);
            json.msg = interaction;
            saveData(path, json);
            child_process.exec(processPath, function(error, stdout, stderr) {
                console.log(stdout);
            })
        }
        else{
            interaction.reply("You do not have the proper permission to do this!")
        }

    }
}
