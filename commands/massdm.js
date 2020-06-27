const Discord = require('discord.js');
const config = require('../config.json');
const log = require(`leekslazylogger`);
const client = new Discord.Client()
let roleID = "718124565733179450";
module.exports = {
    name: 'massdm',
    description: 'DMs users with role',
    usage: '[message]',
    aliases: ['none'],
    example: '!massdm message',
    args: true,
    cooldown: config.cooldown,
    guildOnly: true,
    execute(message, args) {
    let isBotOwner = message.author.id == '287700519726612482';



try {
    if (!isBotOwner)
          return;
    const prefix = config.prefix;
    const args1 = message.content.slice(prefix.length).split(/ +/);
      const command1 = args1.shift().toLowerCase();
    
      if (!message.content.startsWith(prefix) || message.author.bot) return;
      
      
      let text = args1.slice(0).join(" ");
          message.guild.members.cache.forEach( (user) => {
              if(user.roles.cache.has(roleID)) {
                  user.send(text)
          log.success("Message sent to: " + user.displayName)
          client.channels.cache.get(config.console).send(`Message was sent to ` + user.displayName)
              } else {
          log.warn("Message wasn't sent to " + user.displayName + " because they do not have the role!")
          client.channels.cache.get(config.console).send(`Message wasn't sent to ` + user.displayName + ` because they do not have the role!`)
              }
              
          });
        }
            
     catch (error) {
    log.error(error);
    client.channels.cache.get(config.logChannel).send(error)

    log.error(`An unknown error occured whilst executing the massdm command!`)
     }
    }
};

