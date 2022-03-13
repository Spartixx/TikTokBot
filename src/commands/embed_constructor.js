const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');


class EmbedConstructorCommand extends Command {
    constructor() {
        super('embed', {
           aliases: ['embed'],
           description: {
            content: 'La commande embed permet de créer un embed !',
            usages: `${PREFIX}embed\n/titre <titre>\n/description <description>\n/image <lien de l'image ( en png ou jpg )>\n/titre_url <lien ( en http ou https )\n/reaction1 <réactions>\n/reaction2 <réactions>\n/reaction3 <réactions>\n/reaction4 <réactions>`,
            raccourcis: 'embed'
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

    async exec(message) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668');

        let args = message.content.split('~')


        if(message.content.includes('~titre_url', '~description', '~image', '~titre')){

            let title = args[1].substring(5)
            let description = args[2].substring(11)
            let image = args[3].substring(5)
            let title_url = args[4].substring(9)

            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                .setTitle(title)
                .setDescription(description)
                .setURL(title_url)
                .setImage(image)
            ]})
        }else if(message.content.includes('~description', '~image', '~titre')){

            let title = args[1].substring(5)
            let description = args[2].substring(11)
            let image = args[3].substring(5)

            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                .setTitle(title)
                .setDescription(description)
                .setImage(image)
            ]})
        }else if(message.content.includes('~description', '~titre')){

            let title = args[1].substring(5)
            let description = args[2].substring(11)

            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                .setTitle(title)
                .setDescription(description)
            ]})
        }else if(message.content.includes('~titre')){

            let title = args[1].substring(5)

            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                .setTitle(title)
            ]})
        }else if(message.content.includes('~titre', '~description', '~titre_url')){

            let title = args[1].substring(5)
            let description = args[2].substring(11)
            let title_url = args[4].substring(9)

            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                .setTitle(title)
                .setDescription(description)
                .setURL(title_url)
            ]})
        }else if(message.content.includes('~titre', '~titre_url')){

            let title = args[1].substring(5)
            let title_url = args[4].substring(9)

            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                .setTitle(title)
                .setURL(title_url)
            ]})
        }else if(message.content.includes('~titre', '~image')){

            let title = args[1].substring(5)
            let image = args[3].substring(5)

            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                .setTitle(title)
                .setImage(image)
            ]})
        }else{
            message.reply('***une erreur est survenue***')
        }

    CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }
}

module.exports = EmbedConstructorCommand;