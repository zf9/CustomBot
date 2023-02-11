const ms = require('ms');
const Discord = require('discord.js');
const config = require('../../config/bot');


module.exports = {
    name: 'help',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}help',

    execute(client, message) {
        let Prefix = config.discord.prefix;
        let Embed = new Discord.MessageEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setDescription(`
        ${Prefix}help [This Embed]
        ${Prefix}eval [Owner Only]
        ${Prefix}sysinfo
        ${Prefix}ping

        ${Prefix}radio
        ${Prefix}radio kisstory
        ${Prefix}radio kissnational
        ${Prefix}radio kissfresh
        ${Prefix}radio kissgarage
        ${Prefix}radio ukg247
        ${Prefix}radio cadi
        ${Prefix}radio big3
        ${Prefix}radio dashville
        ${Prefix}radio rbx
        ${Prefix}radio h1580
        ${Prefix}radio hiphopx
        ${Prefix}radio countryx
        ${Prefix}radio boomerang
        `)
        message.channel.send(Embed)
    },
};