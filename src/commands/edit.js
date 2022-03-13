const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');


class EditCommand extends Command {
    constructor() {
        super('edit', {
           aliases: ['edit', 'e'],
           description: {
            content: 'La commande edit permet de modifier des messages !',
            usages: `${PREFIX}edit <id>`,
            raccourcis: 'edit, e'
        },
           category: 'Dev',
           ignoreCooldown: '831835872625295390',
           ignorePermissions: '831835872625295390',
           userPermissions: 'MANAGE_MESSAGE',
           clientPermissions: 'MANAGE_MESSAGE',
           ratelimit: 2,
           cooldown: 3000,
           typing: true,
           ownerOnly: false,
           channel: 'guild',
           args: [
               {id: 'command', type: 'commandAlias'},
           ]
        });
    }

    exec(message, args) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        let arg = message.content.split(' ')
        let to_edit = arg[1]
        let msg = arg[2]

        message.channel.messages.fetch(to_edit).then(m =>{
            m.edit(msg), message.delete()
        })
        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }
}

module.exports = EditCommand;