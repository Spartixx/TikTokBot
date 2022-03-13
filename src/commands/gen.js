const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const table = require('table');
//dbminecraftp
const dbdbminecraftp = new FileSync("dbmineraftp.json")
const dbminecraftp = low(dbdbminecraftp)



class GenCommand extends Command {
    constructor() {
        super('gen', {
           aliases: ['gen'],
           description: {
            content: 'La commande gen permet de générer les comptes présents dans la DB.',
            usages: `${PREFIX}gen`,
            raccourcis: 'gen'
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
        if (message.content ==="/gen minecraft"){                     ////// Nom de la commande    

            if(dbminecraftp.get("Minecraftp").find({idserv: message.guild.id}).value()){            /////Verifie si il y a des comptes dans la db
            let accdb = dbminecraftp.get("Minecraftp").filter({idserv : message.guild.id}).find("acc").value()          
            let accvar = Object.values(accdb)

          
            message.author.createDM().then(message =>{
              message.send({ embeds: [ 
                this.client.functions.embed() 
                .setTitle('***__Voici ton compte Minecraft !__***')
                .setDescription(`${'```'}\n ${accvar[0]} ${'```'}`)
                .setColor('#F00FE2')
            ]}).then(function(message) { 
                message.react('✅')
              })
            })
          
            dbminecraftp.get('Minecraftp').remove({acc : accvar[0]}).write()                              /////// Enlève le compte de la db
            
            message.channel.send({ embeds: [ 
                this.client.functions.embed() 
                .setTitle('***__Votre compte a été généré ! __***')
                .setDescription(`${'```'}\n ${'Pseudo : '}${message.member.user.tag}\n Id : ${message.member.id} ${'```'}`)
                .setImage("https://cdn.discordapp.com/attachments/918233281210773519/920387752405639270/coucher-soleil-au-fond-plage_23-2148185246.png")
                .setColor('#F00FE2')
            ]})

            }else{
                message.channel.send({ embeds: [ 
                    this.client.functions.embed() 
                    .setTitle('***__Votre compté n\'a pas été généré __***')
                    .setDescription(`${'```'}\n ${'Pseudo : '}${message.member.user.tag} ${'```'}`)
                    .setImage("https://cdn.discordapp.com/attachments/918233281210773519/920388255969603594/maxresdefault.png")
                    .setColor('#F00FE2')
                ]})
            }}
    }
}

module.exports = GenCommand;