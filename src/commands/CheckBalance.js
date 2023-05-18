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
        name: "checkbalance",
        description: "Shows your balance",
    },

    

    run: ({ interaction }) => {
        var userPath = path.resolve(__dirname, '..')+'/data/'+interaction.guildId+'/'+interaction.user.id+'.json'
        if(checkPathExists(userPath))
        {
            var bank = require(userPath);
            interaction.reply({content:"You have $"+bank.data.Balance.toString()+"in your account.",ephemeral:true});
        }
        else{
            interaction.reply({content:"You do not have an account with us, use the /createaccount command to create one.",ephemeral:true})
        }
    },

    deleted: false
}


