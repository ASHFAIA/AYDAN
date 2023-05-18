const fs = require("fs");
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('initbank')
        .setDescription('Initialize the banking system for the server.'),
    run: ({ interaction, client, handler }) =>{
        let serverID = interaction.guild.id;
        console.log(serverID)
        let path = "__dirname/../../data/banks/servers/"+serverID;
        
        if(fs.existsSync(path))
        {
            interaction.reply("This server already has a banking system!")
        }
        else{
            fs.cpSync('__dirname/../../data/banks/servers/templateServer',path, (err) =>{
                if(err) console.log(err);
            })
            interaction.reply("Bank created!");
        }
    }
}