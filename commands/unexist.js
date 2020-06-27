const Discord = require('discord.js');
const config = require('../config.json');
const log = require(`leekslazylogger`);
module.exports = {
  name: 'unexist',
  description: 'An example command',
  usage: '[args]',
  aliases: ['none'],
  example: 'example-command',
  args: false,
  cooldown: config.cooldown,
  guildOnly: true,
  execute(message, args) {
    const client = message.client;
    // command starts here
    message.delete();
    message.reply('you no longer exist.')



    // command ends here
  },
};
