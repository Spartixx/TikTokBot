const { Command } = require('discord-akairo');
const { PREFIX } = require('../../config');
const moment = require('moment');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const table = require('table');
//dbconfig
const dbdbconfig = new FileSync("dbconfig.json")
const dbconfig = low(dbdbconfig)
dbconfig.defaults({ ModLog_channel: [], log_channel: [], leave_channel: [], join_channel: []})
  .write()



class ChannelConfigCommand extends Command {
    constructor() {
        super('config', {
           aliases: ['config'],
           description: {
            content: 'La commande config permet de configurer les salons.',
            usages: `${PREFIX}config <type> <id>`,
            raccourcis: 'config'
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

    async exec(message, member) {

        let args = message.content.split(' ')
        let guild_id = message.guild.id

        if(args[1] === "modlog"){
            if(dbconfig.get("ModLog_channel").find({channel_id: args[2]}).value()){
                return
            }else if(dbconfig.get('ModLog_channel').find({server_id: guild_id}).value()){
            dbconfig.get('ModLog_channel').find({server_id: message.guild.id}).assign({server_id: guild_id, channel_id: args[2]}).write()
            }else{
                dbconfig.get('ModLog_channel').push({server_id: guild_id, channel_id: args[2]}).write()
            }
        }

        if(args[1] === "log"){
            if(dbconfig.get("log_channel").find({channel_id: args[2]}).value()){
                return
            }else if(dbconfig.get('log_channel').find({server_id: guild_id}).value()){
            dbconfig.get('log_channel').find({server_id: message.guild.id}).assign({server_id: guild_id, channel_id: args[2]}).write()
            }else{
                dbconfig.get('log_channel').push({server_id: guild_id, channel_id: args[2]}).write()
            }
        }

        if(args[1] === "leave"){
            if(dbconfig.get("leave_channel").find({channel_id: args[2]}).value()){
                return
            }else if(dbconfig.get('leave_channel').find({server_id: guild_id}).value()){
            dbconfig.get('leave_channel').find({server_id: message.guild.id}).assign({server_id: guild_id, channel_id: args[2]}).write()
            }else{
                dbconfig.get('leave_channel').push({server_id: guild_id, channel_id: args[2]}).write()
            } 
        }

        if(args[1] === "join"){
            if(dbconfig.get("join_channel").find({channel_id: args[2]}).value()){
                return
            }else if(dbconfig.get('join_channel').find({server_id: guild_id}).value()){
            dbconfig.get('join_channel').find({server_id: message.guild.id}).assign({server_id: guild_id, channel_id: args[2]}).write()
            }else{
                dbconfig.get('join_channel').push({server_id: guild_id, channel_id: args[2]}).write()
            }
        }
 
        if(args[1] === "help"){
            const embed = this.client.functions.embed()
            .setTitle(' ***De l\'aide pour configurer vos salon 😉*** ')
            .setDescription('Paramètre désigne le type de salon.')
            .addField('1er paramètre', "``modlog`` : configure le salon dédié aux logs pour la modération.", false)
            .addField('2ème paramètre', "``log`` : configure le salon dédié aux logs général.", false)
            .addField('3ème paramètre', "``leave`` : configure le salon dédié au départ des membres", false)
            .addField('4ème paramètre', "``join`` : configure le salon dédié à l'arrivé des membres", false)

            message.channel.send({embeds: [embed]})  
        }
    }
}

module.exports = ChannelConfigCommand;