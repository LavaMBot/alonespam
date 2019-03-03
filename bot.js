const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("551348353838088204")
setInterval(function() {
channel.send(` ✿اللهم صلّ على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم وبارك على محمد وعلى آل محمد كما باركت على إبراهيم وعلى آل إبراهيم ✿ (لا إله إلا الله)
 
`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
