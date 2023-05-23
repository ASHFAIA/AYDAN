const { SlashCommandBuilder } = require('discord.js');
const child_process = require('child_process');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const AllowedAccounts = process.env.gitAccounts;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('update')
        .setDescription('Pulls the latest update from github'),
    run: ({interaction, client, handler}) => 
    {
        
    }
}
