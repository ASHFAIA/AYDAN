const List = require('__dirname/../../../../database/bannedWords.json').words;

module.exports = (msg, client, handler) => {
    if(msg.author.tag == client.user.tag) return;
    if(msg.content.some(i => List.includes(i)));
    {
        msg.delete
    }
}