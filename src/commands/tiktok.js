const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js')
const { PREFIX } = require('../../config');
const mysql = require('mysql');
const moment = require('moment');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const table = require('table');

//db tiktok ( MySQL )
const db = mysql.createConnection({
  host: "141.94.185.10",
  port: "3306",
  user: "u5_m4llKHq3bx",
  password: "!jFw3aiEcixNhze4y@lyWNu@",
  database: "s5_tiktokdb"
});

class TiktokCommand extends Command {
    constructor() {
        super('tiktok', {
           aliases: ['tiktok'],
           description: {
            content: 'La commande tiktok permet d\'envoyer les vues sur votre lien enregistré dans notre base de donnée',
            usages: `${PREFIX}tiktok`,
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
        const { Buffer } = require('buffer');
        const buf = Buffer.alloc(64);
        const { execFile } = require('child_process');
        const child = execFile('python', ['tiktok/main.py'], (error, stdout, stderr) => {
          if (error) {
            throw error;
          }
          console.log(stdout);
        });
        const child2 = execFile('python', ['tiktok/main2.py'], (error, stdout, stderr) => {
          if (error) {
            throw error;
          }
          console.log(stdout);
        });
        const child3 = execFile('python', ['tiktok/main3.py'], (error, stdout, stderr) => {
          if (error) {
            throw error;
          }
          console.log(stdout);
        });
    }
}
    

module.exports = TiktokCommand;