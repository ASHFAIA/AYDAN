const { Client, IntentsBitField } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const path = require('path')
const lastMsg = require(path.resolve(__dirname+'../updateRanIn.json'))
const child_process = require('child_process')
require('dotenv').config();

process.on('uncaughtException', function (err) {
    if(process.uptime < 20)
    {
        lastMsg.msg.send("Error updating! Rolling back.")
        console.error(err);
        console.log("Error occurred");
        
  }});

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

