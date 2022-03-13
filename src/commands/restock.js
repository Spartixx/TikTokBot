const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { each } = require('cheerio/lib/api/traversing');
const stock = new FileSync('stock.json');
const db = low(stock);

class RetockCommand extends Command {
    constructor() {
        super('restock', {
           aliases: ['restock'],
           description: {
            content: 'La commande restock permet de restock des comptes dans la bases de données !',
            usages: `${PREFIX}restock`,
            raccourcis: 'restock'
        },
           category: 'Misc',
           ignoreCooldown: '831835872625295390',
           ignorePermissions: '831835872625295390',
           ratelimit: 2,
           cooldown: 3000,
           typing: true,
           ownerOnly: true,
           channel: 'guild',
        });
    }

    async exec(message, args) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')

        let accounts = message.content.split(' ')

        if(accounts.length == "20"){
            message.reply('Il doit y avoir un minimum de 20 comptes dans le messages pour qu\'ils soient ajoutés à la base de données !')
        }if(!db.get('Comptes').find({acc1, acc2, acc3, acc4, acc5, acc6, acc7, acc8, acc9, acc10, acc11, acc12, acc13, acc14, acc15, acc16, acc17, acc18, acc19, acc20}).value()){
        db.get('Comptes').push({acc1: accounts[1], acc2: accounts[2], acc3: accounts[3], acc4: accounts[4]}).write()
        }

        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }
}

module.exports = RetockCommand;