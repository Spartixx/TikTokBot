const { Command } = require('discord-akairo');
const { PREFIX, CONSOLE_LOGS_CHANNEL } = require('../../config');
const moment = require('moment');


class AutoRoleCommand extends Command {
    constructor() {
        super('autorôle', {
           aliases: ['autorôle'],
           description: {
            content: 'La commande autorôle permet de choisir ses rôles !',
            usages: `${PREFIX}autorôle`,
            raccourcis: 'autorôle'
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
        });
    }

    async exec(event, message, { member, reason }) {

        await message.channel.send({ embeds: [ 
            this.client.functions.embed() 
            .setTitle("***__Choisissez vos rôle !__***")  
            .setDescription("\n\n1️⃣ = ``Joueur fortnite``\n2️⃣ = ``Joueur Rocket League``\n3️⃣ = ``Joueur Coldwar ``\n4️⃣ = ``Joueur GTA``\n\n\n***Veuillez choisir vos rôles en cochant les réactions.***")
            .setColor("#1F8B4C")
        ]}).react('1️⃣', '2️⃣', '3️⃣', '4️⃣')
        
    }
};

module.exports = AutoRoleCommand;                    