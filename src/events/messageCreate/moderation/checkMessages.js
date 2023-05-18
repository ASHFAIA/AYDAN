const List = require("./../../../../database/bannedWords.json");

module.exports = (msg, client, handler) => {
    if(msg.author.tag == client.user.tag) return;
    if(msg.content.some(i => List.includes(i)));
    {
        msg.delete
    }
}