const Discord = require('discord.js');
const config = require('../config.json');
const log = require(`leekslazylogger`);
module.exports = {
  name: 'ping',
  description: 'Calculate latency',
  usage: '',
  aliases: ['none'],
  example: '',
  args: false,
  cooldown: config.cooldown,
  guildOnly: true,
  execute(message, args) {
    const client = message.client;
    var ping = Date.now() - message.createdTimestamp + " ms";
    // command starts here
    message.delete();
    //if (message.content.startsWith(prefix + "ping")) {
    
     // message.channel.sendMessage("Your ping is `" + `${ping}` + " ms`");
  
    const embed = new Discord.MessageEmbed()
        .setTitle("Pong!")
        .setColor(config.colour)
        .setTimestamp()
        .addField("Your ping is: ", `${ping}`, true)
    message.channel.send({embed})




    // command ends here
  },
};
