const { stripIndents } = require('common-tags');
const { Command } = require('discord-akairo');
const { BLUE_COLOR, PREFIX } = require('../../config');
const moment = require('moment');


class HelpCommand extends Command {
    constructor() {
        super('help', {
           aliases: ['help', 'aide', ' '],
           category: 'Misc',
           description: {
               content: 'La commande Help renvoie la liste de commandes du bot !',
               usages: `${PREFIX}help`,
               raccourcis: 'help, aide'
           },
           ignoreCooldown: '831835872625295390',
           ignorePermissions: '831835872625295390',
           userPermissions: 'SEND_MESSAGES',
           clientPermissions: 'SEND_MESSAGES',
           cooldown: 3000,
           typing: true,
           ownerOnly: false,
           channel: 'guild',
           args: [
               {id: 'command', type: 'commandAlias'}
           ]
        });
    }

    async exec(message, args) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        const command = args.command;
        const prefix = await this.handler.prefix(message);

        if(!command){
            let embed = this.client.functions.embed()
                .setAuthor(`Bonjour, je suis ${this.client.user.username} !`, this.client.user.displayAvatarURL())
                .setDescription('Voici la liste de toute mes commandes !\nSi vous avez besoins d\'aide, rejoignez [ce serveur](https://github.com/Spartixx/crunchy-bot)\n\n**----------------------------------------------**')

            for (const category of this.handler.categories.values()){
                embed.addField(
                    `💎 ${category.id} 💎`,
                    `${category
                        .filter(cmd => cmd.aliases.length > 0)
                        .map(cmd => `\`${cmd.aliases[0]}\``)
                        .join(', ')}`
                )
            }

            embed.addField(
                '**----------------------------------------------**',
                `\`${prefix}help <commande>\` **Pour des infos ciblées sur la commande.**`
            )


            return message.channel.send({embeds: [ embed ]})
        }

        return message.channel.send({ embeds: [ 
            this.client.functions.embed() 
                .setTitle(`***Voici quelques infos sur la commande ${prefix}${command.aliases[0]}:***`)
                .setDescription(`\`Utilité :\` ${command.description.content}\n\`Utilisation :\` ${command.description.usages}\n\`Raccourcis :\` ${command.description.raccourcis}`)
        ]}),
        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }
}

module.exports = HelpCommand;