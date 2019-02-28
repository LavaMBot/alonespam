const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("550530368009273362")
setInterval(function() {
channel.send(` @everyone jhfdjfhdsjfhskjdfhjskdfhjksdhfjdf @everyone  `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
