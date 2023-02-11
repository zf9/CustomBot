const Discord = require('discord.js');
const config = require('../../config/bot');

module.exports = {
  name: 'eval',
  aliases: [],
  async execute(client, message, args) {
    if (message.author.id !== config.client.OwnerID) return;

    try {
      await eval(args.join(' '));
    } catch(error) {
      console.error(error);
      message.channel.send('Error while evaluating the expression.'); 
    }
  },
};

// Recoded By ChatGPT