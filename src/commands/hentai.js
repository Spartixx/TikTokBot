const { Command } = require('discord-akairo');
const { PREFIX, CONSOLE_LOGS_CHANNEL } = require('../../config')
const moment = require('moment');
const fetch = import('node-fetch');

class HentaiCommand extends Command {
    constructor() {
        super('hentai', {
           aliases: ['hentai','h'],
           description: {
            content: 'La commande hentai permet d\'envoyer une image d\'hentai',
            usages: `${PREFIX}hentai`,
            raccourcis: 'hentai, h'
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
        const { NekoBot } = require("nekobot-api");
        const api = new NekoBot();

            let hentai_list = ['hentai', 'hneko', 'hkitsune', 'hthigh']
            let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')

            const hentai = await api.get(hentai_list[Math.floor(Math.random() * 5)]);

            if(hentai.startsWith("https://" || "http://")){
            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                    .setTitle(`***Voici votre image !***`)
                    .setURL(hentai)
                    .setImage(`${hentai}`)
                    .setFooter(`demandé par ${message.member.user.tag}`)
                    .setColor('#D518C9')
            ]})
            CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
            }else{
                return console.warn(`${moment().format('LTS')} : Erreur pour --> /hentai`),
                message.reply(`${'```'}Une erreur est survenue, désolé pour la gêne occasionée.\n${'```'}`),
                CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().format('LTS')} : Erreur pour --> /hentai\n${'```'}`)
            }
        }
}

module.exports = HentaiCommand;