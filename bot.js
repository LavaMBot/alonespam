const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548064530446548993")
setInterval(function() {
channel.send(`Lava Foo2 TMM`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
