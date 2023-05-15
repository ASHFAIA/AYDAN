

module.exports = (msg, client, handler) => {
    if(msg.author.bot) return;
    if(msg.content.toLowerCase().includes('we are farmers'))
    {
        msg.channel.send('Bum ba dum ba dum bum bump!');
    }
}