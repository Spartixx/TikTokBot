const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');

class TwitchCommand extends Command {
    constructor() {
        super('twitch', {
           aliases: ['twitch','tw'],
           description: {
            content: 'La commande Twitch permet de voir quand NoX-FrYz-_- est en Live !',
            usages: `${PREFIX}Twitch -<nom du live>`,
            raccourcis: 'twitch, tw'
        },
           category: 'Modération',
           ignoreCooldown: '831835872625295390',
           ignorePermissions: '831835872625295390',
           userPermissions: 'ADMINISTRATOR',
           clientPermissions: 'ADMINISTRATOR',
           ratelimit: 2,
           cooldown: 3000,
           typing: true,
           ownerOnly: false,
           channel: 'guild',
        });
    }

    async exec(message) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        const Twitch = "https://www.twitch.tv/fryz__1";
        const guild = message.guild;
        const annonce_channel = guild.channels.cache.get('911746111864193054')
        let args = message.content.split('-');

        return annonce_channel.send({ embeds: [
            this.client.functions.embed()
                .setTitle('***__NoX-FrYz-_- est en Live !__***')
                .addField('📱 Titre du live 📱', args[1], false)
                .addField('🌐 Lien du live 🌐', `[Clique ici pour t\'y rendre](${Twitch})`, true)
        ]
        }).then(annonce_channel.send('@everyone')),
        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }
}

module.exports = TwitchCommand;