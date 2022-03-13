const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');

class RestartCommand extends Command {
    constructor() {
        super('restart', {
           aliases: ['restart', 'rs'],
           description: {
            content: 'La commande Restart permet de redémarrer le bot depuis discord !',
            usages: `${PREFIX}restart`,
            raccourcis: 'restart, rs'
        },
           category: 'Dev',
           ownerOnly: true
        });
    }

    exec(message) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        require('child_process').execSync('pm2 restart 0')
        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }
}

module.exports = RestartCommand;