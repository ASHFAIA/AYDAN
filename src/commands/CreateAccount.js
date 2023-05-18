const fs = require('fs');
const path = require('path');

function checkPathExists(Path)
{ 
    return(fs.existsSync(Path));
}

function SaveData(fileName, file)
{
    fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
    if (err) return console.log(err);
})}



module.exports = {
    data: {
        name: "createaccount",
        description: "Creates an account for the discord bank",
    },

    

    run: ({ interaction }) => {
        var userPath = path.resolve(__dirname, '..')+'/data/'+interaction.guildId+'/'+interaction.user.id+'.json'
        if(checkPathExists(userPath))
        {
            interaction.reply({content:"You already have an account with us!",ephemeral:true})
        }
        else{
            fs.copyFileSync(path.resolve(__dirname, '..')+'/data/template.json',userPath)
                    
            if(checkPathExists(userPath))
            {
                var bank = require(userPath);
                bank.data.Balance += 1000;
                bank.data.Username=interaction.user.username;
                SaveData(userPath, bank);
                interaction.reply({content:"Account created! You have been given $1000 for creating an account!", ephemeral:true})
            }
            else{
                interaction.reply({content:"There was an error creating your account, please try again.", ephemeral:true})
            }      
        }
    },

    deleted: false
}


