const Command = require('../../structures/Command');
const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'ticket',
        aliases: ["create", "setup"],
        description: `Create A Ticket sent to a channel.`,
        category: 'Ticket',
        cooldown: 3,
        userPermission: ['MANAGE_GUILD']
      });
    }

    async run(message, args) {

      
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        if(!channel){
            channel = message.channel;
        };
        

        let ticketEmbed = new Discord.MessageEmbed()
       .setTitle(`Ticket System`)
       .setColor(config.color || '#36393f')
       .setTimestamp()
       .setDescription(`Bitte reagiere ${config.emoji || '🎟️'} zum erstellen eines Tickets`)



        channel.send(ticketEmbed).then(m => {
        m.react(config.emoji || '🎟️');
        });


      }
};