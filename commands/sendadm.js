const Discord = require('discord.js');
const config = require('../config.json');
const log = require(`leekslazylogger`);
const client = new Discord.Client()
// let roleID = "715260727237017683";
module.exports = {
    name: 'sendadm',
    description: 'DMs user specified',
    usage: '[message]',
    aliases: ['none'],
    example: '!senddm @user message',
    args: true,
    cooldown: config.cooldown,
    guildOnly: true,
    execute(message, args) {
try {


       // msg = message.content.cache.toLowerCase();

        if (message.author.bot) return;
      
        mention = message.mentions.users.first();

            if (mention == null) { return; }
            message.delete();
            mentionMessage = message.content.slice (8);
            mention.send.message (mentionMessage);
           // message.channel.send ("done!");
        
    } catch (error) {
        log.error(error);
        // client.channels.cache.get(config.logChannel).send(error)

        log.error(`An unknown error occured whilst executing the senddm command!`)
    }
    //the new one
        switch (args[0]) {
            case 'dm':
              if (!args[1]) message.channel.send('You need to specify a user!')
        
              const user = message.mentions.users.first();
        
              if (user) {
                const member = member.guild.cache.member(user);
        
                if (member) {
                  member.send('Test message').then(() => {
                    message.reply(`Sent a DM to ${user.tag}`);
                  }).catch(error => {
                    message.reply('Unable to send a DM to that specified user!')
                    console.log(error);
                    client.channels.cache.get(config.logTickets).send(`An error occured while running the DM command!`);
                  });
                } else {
                  message.reply("That user is not in this server!")
                }
              } else {
                message.reply('That user is not in the server!')
              }
              break;
          }
          }
        }
        
        
            

