const { Client, IntentsBitField } = require('discord.js')
const { CommandHandler} = require('djs-commander');
const path = require('path')
require('dotenv').config();

const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.Messages,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
    ]
})

new CommandHandler({
    client : bot,
    commandsPath: path.join(__dirname,'commands'),
    EventsPath: path.join(__dirname,'events')
})


bot.login(process.env.Token);