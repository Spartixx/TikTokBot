const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');


class UserInfoCommand extends Command {
    constructor() {
        super('userinfo', {
           aliases: ['userinfo', 'info', 'userinfos', 'infos'],
           description: {
            content: 'La commande UserInfo permet de voir quelques informations sur un utilisateur !',
            usages: `${PREFIX}userinfo | ${PREFIX}userinfo @membre`,
            raccourcis: 'userinfo, userinfos, infos, info'
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
               {id: 'member', type: 'member', default: message => message.member},
           ]
        });
    }

    exec(message, args) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        return message.channel.send({ embeds: [ 
            this.client.functions.embed() 
                .setTitle(`***Voici quelques infos sur ${args.member.displayName} :***`)
                .setFooter(`ID : ${args.member.id}`)
                .setThumbnail(`${args.member.user.displayAvatarURL()}`)
                .addFields(
                    {name: 'Création du compte :', value: `Le ${args.member.user.createdAt}`, inline: true},
                    {name: 'Membre depuis :', value: `Le ${args.member.joinedAt}`, inline: true}
                )
        ]}),
        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }
}

module.exports = UserInfoCommand;