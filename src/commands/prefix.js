const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');


class PrefixCommand extends Command {
    constructor() {
        super('prefix', {
           aliases: ['prefix'],
           description: {
            content: 'La commande prefix permet de changer le prefix du bot sur le serveur !',
            usages: `${PREFIX}prefix <nouveau prefixe>`,
            raccourcis: 'prefix'
        },
           category: 'Modération',
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
               {id: 'newPrefix', type: 'string'},
           ]
        });
    }

    async exec(message, args) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        if(!args.newPrefix) return message.channel.send(`Le Prefix actuel est : ${await this.handler.prefix(message)}`);
        await this.client.guildSettings.update(message.guild, { prefix: args.newPrefix })
        return message.channel.send(`Le prefix du serveur est maintenant ${args.newPrefix}`),
        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }
}

module.exports = PrefixCommand;