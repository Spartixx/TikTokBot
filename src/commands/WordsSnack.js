const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');

class WordsSnackCommand extends Command {
    constructor() {
        super('words_snack', {
           aliases: ['words_snack'],
           description: {
            content: 'La commande words_snack permet de jouer à Words Snack !',
            usages: `${PREFIX}words_snack`,
            raccourcis: 'words_snack'
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
        const { DiscordTogether } = require('discord-together');
        this.client.discordTogether = new DiscordTogether(this.client);

        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)

        if(message.member.voice.channel) {
            this.client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'wordsnack').then(async invite => {
            return message.channel.send(`${invite.code}`);
            });
        };
    }
}

module.exports = WordsSnackCommand;