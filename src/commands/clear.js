const { Command } = require('discord-akairo');
const { PREFIX, CONSOLE_LOGS_CHANNEL } = require('../../config');
const moment = require('moment');


class ClearCommand extends Command {
    constructor() {
        super('clear', {
           aliases: ['clear', 'del'],
           description: {
            content: 'La commande clear permet de supprimer des messages !',
            usages: `${PREFIX}clear <nb>`,
            raccourcis: 'clear, del, delete'
        },
           category: 'Modération',
           ignoreCooldown: '831835872625295390',
           ignorePermissions: '831835872625295390',
           userPermissions: 'MANAGE_MESSAGES',
           clientPermissions: 'MANAGE_MESSAGES',
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
        let msg = message.content.split(' ');
        let number = parseInt(msg[1]);
        if(msg.length === 1){
            return message.reply('***Veuillez entrer le nombre de messages à supprimer !***')
        }else if(isNaN(msg[1])){
            return message.reply(`***${msg[1]} n'est pas un nombre !***`)
        }else if(number > 99){
            return message.reply(`Il faut spécifier un **nombre** entre 1 et 100 !`)
        }else if(number.deletable == false){
            message.reply('Non.')
        }else{
            CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`),
            message.channel.bulkDelete(number).then(message.channel.send(`***__${msg[1]}__ messages ont été supprimé !***`)).catch(err => {
                console.log(err), CONSOLE_LOG_CHANNEL.send('```` Une erreur est survenue.\n\n', err, '\n```')
            })
        }
    }   
}

module.exports = ClearCommand;