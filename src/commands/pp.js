const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');


class PpCommand extends Command {
    constructor() {
        super('pp', {
           aliases: ['pp'],
           description: {
            content: 'La commande Pp permet de voir La photo de profil d\'un membre !',
            usages: `${PREFIX}pp | ${PREFIX}pp @membre`,
            raccourcis: 'pp'
        },
           category: 'Misc',
           ignoreCooldown: '831835872625295390',
           ignorePermissions: '831835872625295390',
           userPermissions: 'SEND_MESSAGES',
           clientPermissions: 'SEND_MESSAGES',
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
        return message.channel.send({ embeds: [ 
            this.client.functions.embed() 
                .setTitle(`***Voici la Pp de ${args.member.displayName} !***`)
                .setImage(`${args.member.user.displayAvatarURL()}`)
        ]}),
        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }
}

module.exports = PpCommand;