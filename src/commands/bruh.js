const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');

class BruhCommand extends Command {
    constructor() {
        super('bruh', {
           aliases: ['bruh','b'],
           description: {
            content: 'La commande bruh permet de faire une action que je cherche encore à déterminer',
            usages: `${PREFIX}bruh`,
            raccourcis: 'bruh'
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
        });
    }

    async exec(message) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        return message.channel.send({ embeds: [
            this.client.functions.embed()
                .setTitle('***__Bruh__***')
        ]}),
        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }
}

module.exports = BruhCommand;