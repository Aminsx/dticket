const Discord = require('discord.js');
const { version } = require('../package.json');
const config = require('../config.json');
const log = require(`leekslazylogger`);
module.exports = {
  name: 'rules',
  description: 'Displays rules menu',
  usage: '[command]',
  aliases: ['command', 'commands'],
	example: 'help new',
  args: false,
  cooldown: config.cooldown,
	guildOnly: true,
  execute(message, args) {
    const client = message.client;
    // command starts here
    message.delete();

		const data = [];
		const { commands } = message.client;






    if (config.useEmbeds) {
				const embed = new Discord.MessageEmbed()
	        		.setTitle("Staff Rules")
                    .setColor("#00FFFF")
                    .addField(`**To read all staff rules, please go to**`, `link`)
                  //  .addField(`link`)
                    .setDescription("DP Support")
                    .setFooter(`DP Support by Unbreakable`);
	        // .addField("...", `...`, true)
	        // .addField("...", `...`, true)

					var cmds = [];
					// cmds.push(commands.map(command => embed.addField(`${config.prefix}${command.name}`, `\`${command.description}\``)));
	      message.channel.send(embed)
					.then(() => {
                        if (message.channel.type === 'dm') return;
                        const embed = new Discord.MessageEmbed()
                            .setTitle("Staff Rules")
                            .setColor("#00FFFF")
                            .addField(`To read all staff rules, please go to`)
                            .addField(`link`)
                            .setDescription("DP Support")
                            .setFooter(`DP Support by Unbreakable`);
						 // message.channel.send(`A list of commands has been sent to you.`);
					})
					.catch(error => {
						// console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
						log.warn(`Could not DM rules menu to ${message.author.tag}, sending to server channel instead`);
						message.channel.send(`:x: **Sorry!** There was an error whilst sending the rules menu via DMs.`)
						message.channel.send(data, { split: true })
					});
			} else {
				const name = args[0].toLowerCase();
				const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));


			data.push(`**Cooldown:** \`${command.cooldown || 3} second(s)\``);

	message.channel.send(data, { split: true });
    }



    // command ends here
}
  }

