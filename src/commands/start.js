const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');

class StartCommand extends Command {
    constructor() {
        super('start', {
           aliases: ['start'],
           description: {
            content: 'La commande start permet de démarrer le bot depuis discord !',
            usages: `${PREFIX}start`,
            raccourcis: 'start'
        },
           category: 'Dev',
           ownerOnly: true
        });
    }

    exec(message) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        require('child_process').execSync('pm2 start index.js')
        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }
}

module.exports = StartCommand;