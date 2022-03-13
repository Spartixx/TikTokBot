const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const table = require('table');
//dbminecraftp
const dbdbminecraftp = new FileSync("dbmineraftp.json")
const dbminecraftp = low(dbdbminecraftp)
dbminecraftp.defaults({Minecraftp: []}).write()



class StockCommand extends Command {
    constructor() {
        super('stock', {
           aliases: ['stock'],
           description: {
            content: 'La commande stock permet de voir le stock de comptes dans la DB.',
            usages: `${PREFIX}stock`,
            raccourcis: 'stock'
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

    async exec(message) {

        let next = message.content.split(' ')
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        if(next[1] != "minecraft"){
        const tableau = [['Compte', 'Stock']]

  
        let minecraft1 = dbminecraftp.getState() 
        let minecraft2 = Object.values(minecraft1)  
        let minecraft3 = minecraft2[0] 
        let minecraft4 = Object.values(minecraft3)
        let minecraft = 0
        while (minecraft4[minecraft] != undefined){
          minecraft++
        }
        tableau.push(["Minecraft", minecraft]) 
      
        message.channel.send({ embeds: [ 
            this.client.functions.embed() 
            .addField('Stock', `\`\`\`${table.table(tableau)}\`\`\``)
            .setColor('#F00FE2')
        ]})

        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }

        const start_mc = "/stock minecraft ";
        if (message.content.startsWith(start_mc)) {
            if (message.member.roles.cache.some(role => role.name === 'Stock')) {      //////// Verifie si la personne qui Stock a le grade "Stock"
              const str = message.content.substring(start_mc.length).trim().split(/\n+/);
              var i=0
              while (i != 1000){
                if (str[i] === undefined){
                  console.log("Des comptes on été stock"),                                ///// Message afficher lors des stocks faits

                  message.channel.send({ embeds: [ 
                    this.client.functions.embed() 
                    .addField('De nouveaux comptes ont été stocks !', `${'```'}\n${str.length} comptes ont été ajouté pour la DB : dbminecraftp.json ${'```'}`)
                    .setColor('#F00FE2')
                ]})

                i = 1000
              }else{
                  dbminecraftp.get("Minecraftp").push({acc : str[i], idserv: message.guild.id}).write() // Ajoute des comptes à la db
                  i += 1 
                }    
              }
          }else{
            message.channel.send("Vous n'avez pas le grade requis.")
          }}
    }
}

module.exports = StockCommand;