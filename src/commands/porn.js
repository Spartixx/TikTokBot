const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const fetch = import('node-fetch');
const moment = require('moment');

class PornCommand extends Command {
    constructor() {
        super('porn', {
           aliases: ['porn'],
           description: {
            content: 'La commande porn permet d\'envoyer une image -18',
            usages: `${PREFIX}porn`,
            raccourcis: 'porn'
        },
           category: 'API',
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

    async exec(message, args) {

        const nude = require('npmporn')

        console.log(nude.realgirls)
    }
}

module.exports = PornCommand;