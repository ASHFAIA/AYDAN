const List = require("./../../../../database/bannedWords.json").words;

module.exports = (msg, client, handler) => {
    if(msg.author.tag == client.user.tag) return;
    if(List.some(word => msg.content.toLowerCase().includes(word))) msg.delete();
}