const { Client, IntentsBitField } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const child_process = require('child_process')
const path = require('path')
require('dotenv').config();


const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
    ]
})


new CommandHandler({
    client : bot,
    commandsPath: path.join(__dirname,'commands'),
    eventsPath: path.join(__dirname,'events')
})


bot.login(process.env.Token);

