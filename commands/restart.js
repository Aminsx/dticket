const Discord = require('discord.js');
const config = require('../config.json');
const log = require(`leekslazylogger`);
module.exports = {
  name: 'restart',
  description: 'Restarts the bot.',
  usage: '[!restart]',
  aliases: ['none'],
  example: '!restart',
  args: false,
  cooldown: config.cooldown,
  guildOnly: true,
  execute(message, args) {
    const client = message.client;
    let isBotOwner = message.author.id == '287700519726612482';
    // command starts here
    try {
        if (!isBotOwner)
            return;
        message.delete();
        console.log('Restarting DP Support... Please wait.')
        log.warn('Restarting DP Support... Please wait.')
        client.channels.cache.get(config.logChannel).send('``Restarting DP Support... Please wait.``\n')
        //client.channels.cache.get(config.logChannel).send('|| ||')
        client.destroy();
        client.login(config.token);
        client.user.setActivity('DM me for support!');
        console.log('Restart complete. If you want to have changes come into effect, please restart the bot from Visual Studio.')
        client.channels.cache.get(config.logChannel).send('``Restart complete. If you want to have changes come into effect, please restart the bot from Visual Studio!``\n')
        //client.channels.cache.get(config.logChannel).send('|| ||')
        log.warn('Restart complete. If you want to have changes come into effect, please restart the bot from Visual Studio!')
        // log.warn('Restart complete.')
    } catch (error) {
        log.error(error);
        client.channels.cache.get(config.logChannel).send(error)

        log.error(`An unknown error occured whilst executing the restart command!`)
    }
    


    // command ends here
  },
};