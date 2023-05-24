const { SlashCommandBuilder } = require('discord.js');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const AllowedAccounts = process.env.gitAccounts;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('update')
        .setDescription('Pulls the latest update from github'),
    run: async ({interaction, client, handler}) => 
    {
        exec(path.resolve(__dirname + "/../../database/update.cmd"), (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error) console.log("Process encountered error: " + error);
            interaction.reply({content:stdout, ephemeral:true})
        })
        //interaction.reply({content:data, ephemeral:true})
    }
}
