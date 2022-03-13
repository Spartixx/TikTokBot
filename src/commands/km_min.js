const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');


class km_minCommand extends Command {
    constructor() {
        super('km/min', {
           aliases: ['km/min'],
           description: {
            content: 'Cette commande permet de passer des km/min en km/h',
            usages: `${PREFIX}km/min nb(de kilomètre) nb(de minutes)>`,
            raccourcis: 'km/min'
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
               {id: 'command', type: 'commandAlias'},
           ]
        });
    }

    exec(message, args) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        let nb = message.content.split(' ');
        let km = parseFloat(nb[1]);
        let min = parseInt(nb[2]);
        if(isNaN(nb[1,2])){
            return message.reply(`${nb[1]} ou ${nb[2]} n'est pas un nombre !`)
        }else if(nb[1,2] === undefined){
            return message.reply('Nombre de messages non ou mal défini !')
        }else{
            let C = min/60
            let C1 = 1/C
            let R = km*C1

            console.log(nb[1], nb[2], km)

            message.channel.send(`${nb[1]} kilomètre en ${nb[2]} minutes est égal à ***__${R} km/h__***\n\n***Voici le calcul :***\n\n${nb[2]}/60 = ${C}\n1/${C} = ${C1}\n${C1}*${km} = ${R}`)
            CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
        }
    }
}

module.exports = km_minCommand;