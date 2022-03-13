const { Listener } = require('discord-akairo');
const moment = require('moment');

class guildMemberRemoveListener extends Listener {
    constructor() {
        super('guildMemberRemove', {
            emitter: 'client',
            event: 'guildMemberRemove'
        });
    }

    async exec(member) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        let pseudo = `${'```'}\n${member.user.tag}${'```'}`
        let membres = `${'```'}\n${member.guild.memberCount.toLocaleString()}${'```'}`
        let member_id = `${'```'}\nid : ${member.user.id}${'```'}`

        if(member.guild.id === "910277150177890324"){

        let leave_channel = this.client.channels.cache.get('918233280514510872')

        const embed = this.client.functions.embed()
            .setTitle('👋 ***Un membre vient de partir !*** 👋')
            .addField('🤖 Pseudo : 🤖', pseudo, true)
            .addField('📈 membres : 📈', membres, true)
            .addField('***On espère te revoir parmis nous !***', `${member_id}`, false)
            .setImage(member.user.displayAvatarURL())

        await leave_channel.send({embeds: [embed]})
        .then(() => console.log(`${moment().format('LTS')} : guildMemberRemove --> Message envoyé pour ${member.user.tag}`)).then(() => CONSOLE_LOG_CHANNEL.send(`${'```'}\n${moment().format('LTS')} : guildMemberRemove --> Message envoyé pour ${member.user.tag} ${'```'}`))
        .catch(() => console.log(`${moment().add(6, 'hours').format('LTS')} : guildMemberRemove --> Message /non/ envoyé pour ${member.user.tag}`))
        }else{
            let leave_channel = this.client.channels.cache.get('916062272055541820')

            const embed = this.client.functions.embed()
                .setTitle('👋 ***Un membre vient de partir !*** 👋')
                .addField('🤖 Pseudo : 🤖', pseudo, true)
                .addField('📈 membres : 📈', membres, true)
                .addField('***On espère te revoir parmis nous !***', `${member_id}`, false)
                .setImage(member.user.displayAvatarURL())
    
            await leave_channel.send({embeds: [embed]})
            .then(() => console.log(`${moment().format('LTS')} : guildMemberRemove --> Message envoyé pour ${member.user.tag}`)).then(() => CONSOLE_LOG_CHANNEL.send(`${'```'}\n${moment().format('LTS')} : guildMemberRemove --> Message envoyé pour ${member.user.tag} ${'```'}`))
            .catch(() => console.log(`${moment().add(6, 'hours').format('LTS')} : guildMemberRemove --> Message /non/ envoyé pour ${member.user.tag}`))
     
        }
    }
}

module.exports = guildMemberRemoveListener;