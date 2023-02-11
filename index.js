require("dotenv").config();
const fs = require('fs');
const discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const Process = fs.readdirSync('./process').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of Process) {
    console.log(`Loading client error handleing ${file}`);
    const event = require(`./process/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};


client.login(client.config.discord.token);



/*
const express = require("express")
const server = express()
server.all("/api", (req, res) => {
    let count = 0;
    client.guilds.cache.forEach((guild) => {
    count += guild.memberCount
    })
    res.json({ botname: `${client.user.username}`, totalserver: `${client.guilds.cache.size}`, totalchannels: `${client.channels.cache.size}`, totalmembers: `${count}`})
});
function apiserver1() {
  server.listen("4000" || 6000, () => {
    console.log("Server is ready.")
  })
}
module.exports = apiserver1
apiserver1();
*/