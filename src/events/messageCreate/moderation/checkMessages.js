const List = require("./../../../../database/bannedWords.json").words;

module.exports = (msg, client, handler) => {
    if(msg.author.tag == client.user.tag) return;
    if(List.some(i => msg.content.includes(i)));
    {
        msg.delete
    }
    console.log(List);
}