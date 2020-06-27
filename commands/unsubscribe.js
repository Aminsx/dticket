
const Discord = require('discord.js');
const config = require('../config.json');
const log = require(`leekslazylogger`);
module.exports = {
  name: 'unsubscribe',
  description: 'Removes the DP Mail role from you.',
  usage: '[args]',
  aliases: ['none'],
  example: '!unsubscribe',
  args: false,
  cooldown: config.cooldown,
  guildOnly: true,
  execute(message, args) {
    const client = message.client;
    let roleID = "718124565733179450";
    // command starts here
    message.delete();
        message.member.roles.remove(roleID)
        log.success("Removed the DP Mail role from a user")
        client.channels.cache.get(config.console).send(`Removed the DP Mail role from a user`)
        



    // command ends here
  },
};
