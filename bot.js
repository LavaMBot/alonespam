const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("550100640307740705")
setInterval(function() {
channel.send(` @everyone رساله لصاحب السرفر انا قادر اعمل اي حاجه بس مش عايز @everyone  `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
