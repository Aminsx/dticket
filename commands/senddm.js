const Discord = require('discord.js');
const config = require('../config.json');
const log = require(`leekslazylogger`);
module.exports = {
  name: 'avatar',
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
    try {
    if (args[0]) {
		const user = getUserFromMention(args[0]);
		if (!user) {
			return message.reply('Please use a proper mention if you want to see someone else\'s avatar.');
		}

		return message.channel.send(`Here: ${user.displayAvatarURL({ dynamic: true })}`);
	}

    return message.channel.send(`Here: ${message.author.displayAvatarURL({ dynamic: true })}`);
} catch (error) {
    log.error(error);
    client.channels.cache.get(config.logChannel).send(error)

    log.error(`An unknown error occured whilst executing the avatar command!`)
}



    // command ends here
  },
};
