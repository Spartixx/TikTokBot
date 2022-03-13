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



class TranslateCommand extends Command {
    constructor() {
        super('translate', {
           aliases: ['translate'],
           description: {
            content: 'La commande translate permet de traduire du texte !',
            usages: `${PREFIX}translate <langue> <langue voulue> <texte (une ligne plus bas)>`,
            raccourcis: 't'
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
        });
    }

    async exec(message, member) {

        let args = message.content.split('/\n+/') 
        let langues = message.content.split(' ')

        var axios = require("axios").default;

        var options = {
          method: 'POST',
          url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
          headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
            'x-rapidapi-key': 'f2c35fb80fmsh69dd7538a0331dep1b5d30jsn9a3551ca09f7'
          },
          data: {q: args[0], source: 'en', target: 'fr'}
        };

        
        axios.request(options).then(function (response) {
            console.log(response.data.data.translations.translatedText)
            message.reply(response.data.data.translations.translatedText.substring(9))
        }).catch(function (error) {
            console.error(error);
        });
    }
}

module.exports = TranslateCommand;