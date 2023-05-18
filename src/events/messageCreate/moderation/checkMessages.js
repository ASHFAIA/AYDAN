const List = require("./../../../../database/bannedWords.json").words;

module.exports = (msg, client, handler) => {
    if(msg.author.tag == client.user.tag) return;
    if(List.some(word => msg.content.includes(word)));
    {
        console.log(List.some(word => msg.content.includes(word)));
    }
}