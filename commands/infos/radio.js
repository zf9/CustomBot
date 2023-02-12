const fs = require('fs');
var parseString = require('xml2js').parseString;

const snekfetch = require("snekfetch");
const Discord = require('discord.js');
const config = require('../../config/bot');
const URL_List = require('../../config/URL');

let URL1;
let URL2;
module.exports = {
    name: 'radio',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}radio <args>',
    async execute(client, message, args) {
        if (!message.guild) return;
        if (!args[0]) return message.reply("The provided arguments do not match the configuration. Please double-check the provided arguments and try again.");
        try 
        {
            let RadioStation = args[0].toLowerCase();
            if ((RadioStation in URL_List) == false)
            {
                return message.reply("The provided arguments do not match the configuration. Please double-check the provided arguments and try again.")
            }

            if (RadioStation == "kisstory"){ URL1 = URL_List.kisstory; URL2 = URL_List.kisstory_api; }
            else if (RadioStation == "kissnational"){ URL1 = URL_List.kissnational; URL2 = URL_List.kissnational_api; }
            else if (RadioStation == "kissfresh"){ URL1 = URL_List.kissfresh; URL2 = URL_List.kissfresh_api; }
            else if (RadioStation == "kissgarage"){ URL1 = URL_List.kissgarage; URL2 = URL_List.kissgarage_api; }
            else if (RadioStation == "ukg247"){ URL1 = URL_List.ukg247; URL2 = URL_List.ukg247_api; }
            else if (RadioStation == "cadi"){ URL1 = URL_List.cadi; URL2 = URL_List.cadi_api; }
            else if (RadioStation == "big3"){ URL1 = URL_List.big3; URL2 = URL_List.big3_api; }
            else if (RadioStation == "dashville"){ URL1 = URL_List.dashville; URL2 = URL_List.dashville_api; }
            else if (RadioStation == "rbx"){ URL1 = URL_List.rbx; URL2 = URL_List.rbx_api; }
            else if (RadioStation == "h1580"){ URL1 = URL_List.h1580; URL2 = URL_List.h1580_api; }
            else if (RadioStation == "hiphopx"){ URL1 = URL_List.hiphopx; URL2 = URL_List.hiphopx_api; }
            else if (RadioStation == "countryx"){ URL1 = URL_List.countryx; URL2 = URL_List.countryx_api; }
            else if (RadioStation == "boomerang"){ URL1 = URL_List.boomerang; URL2 = URL_List.boomerang_api; }

            
            try {
                if (URL2.includes("tunein.com")) {
                    await snekfetch.get(URL2).then(r => {
                        let Embed = new Discord.MessageEmbed()
                        .setAuthor(r.body.Header.Title, r.body.Primary.Image, r.body.Link.WebUrl)
                        .setColor(Math.floor(Math.random() * 16777214) + 1)
                        .setDescription(`**Subtitle :** ${r.body.Header.Subtitle}`)
                        message.channel.send(Embed);
                    });
                }
                else if (URL2.includes("securenetsystems.net")) {
                    await snekfetch.get(URL2).then(r => {
                        parseString(r.body, function (err, result) {
                            let Embed = new Discord.MessageEmbed()
                            .setAuthor(result.playlist.title[0], result.playlist.cover[0], "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg")
                            .setColor(Math.floor(Math.random() * 16777214) + 1)
                            .setDescription(`**Artist :** ${result.playlist.artist[0]}\n**Album :** ${result.playlist.album[0]}`)
                            message.channel.send(Embed);
                        });
                    });
                }
                else {
                    message.channel.send("No Collectable Data Available from the Radio Station : " + RadioStation);
                }

                message.member.voice.channel.join().then(vc => {
                    message.guild.me.voice.setSelfDeaf(true);
                    vc.play(`${URL1}`);
                });  
                return;


                
            } catch (error) {
                return message.reply(error)
            } 
            
        } catch (error) {
            return message.reply(error)
        }        
    },
};