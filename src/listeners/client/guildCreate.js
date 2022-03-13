const { Listener } = require('discord-akairo');
const { Guild } = require('../../structures/Models');
const moment = require('moment');

class GuildCreateAddListener extends Listener {
    constructor() {
        super('guildCreate', {
            emitter: 'client',
            event: 'guildCreate'
        });
    }

    async exec(guild) {
        await Guild.create({ id: guild.id }, err => {
            if(err) return console.log(`${moment().format('LTS')} : GuildCreate --> /Erreur/`);
            console.log(`${moment().add(6, 'hours').format('LTS')} : Nouveau serveur --> Nom : ${guild.name}, Id : ${guild.id}, Membres : ${guild.memberCount}`);
        })
    }
}

module.exports = GuildCreateAddListener;