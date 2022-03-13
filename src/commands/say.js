const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');


class SayCommand extends Command {
    constructor() {
        super('say', {
           aliases: ['say', 'dis'],
           description: {
            content: 'La commande say permet de parler avec le bot !',
            usages: `${PREFIX}say`,
            raccourcis: 'say, dis'
        },
           category: 'Dev',
           ignoreCooldown: '831835872625295390',
           ignorePermissions: '831835872625295390',
           userPermissions: 'ADMINISTRATOR',
           clientPermissions: 'ADMINISTRATOR',
           ratelimit: 2,
           cooldown: 3000,
           typing: true,
           ownerOnly: false,
           channel: 'guild',
           args: [
               {id: 'member', type: 'member', default: message => message.member},
           ]
        });
    }

    exec(message, args) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        let words = message.content.slice(4,1000)
        message.delete()
        
        return message.channel.send({ embeds: [ 
            this.client.functions.embed() 
                .setTitle(words)
        ]}),
        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }
}

module.exports = SayCommand;