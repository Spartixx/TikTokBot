const { Command } = require('discord-akairo');
const { TextChannel } = require('discord.js');
const { PREFIX } = require('../../config');
const moment = require('moment');

class StatsCommand extends Command {
    constructor() {
        super('stats', {
           aliases: ['stats', 's'],
           description: {
            content: 'La commande stats permet d\'obtenir les statistiques du serveur !',
            usages: `${PREFIX}stats`,
            raccourcis: 'stats, s'
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

    async exec(message, args) {
        let CONSOLE_LOG_CHANNEL = this.client.channels.cache.get('915642499077402668')
        const guild = message.guild;
        const sent_message = await message.channel.send('Stats :');
        const timeStamp = message.editedTimestamp ? message.editedTimestamp : message.createdTimestamp;
        const bot_latency = `${'```'}\n ${Math.round(sent_message.createdTimestamp - timeStamp)}ms ${'```'}`;
        const API = `${'```'}\n ${Math.round(message.client.ws.ping)}ms ${'```'}`;
        const member_number = `${'```'}\n ${message.guild.memberCount.toLocaleString()} membres ${'```'}`;
        const total_roles = `${'```'}\n ${message.guild.roles.cache.size} rôles ${'```'}`;
        const created_time = `${'```'}\n ${moment(message.guild.createdAt).format('DD/MM/YYYY')}${'```'}`;
        const total_text_channels = `${'```'}\n ${guild.channels.cache.filter(ch => ch.type === "GUILD_TEXT").size} salons textuels${'```'}`;
        const total_voice_channels = `${'```'}\n ${guild.channels.cache.filter(ch => ch.type === "GUILD_VOICE").size} salons vocaux${'```'}`;
        const total_category = `${'```'}\n ${guild.channels.cache.filter(ch => ch.type === "GUILD_CATEGORY").size} catégories${'```'}`;
        const server_name = `${'```'}\n ${guild.name} ${'```'}`;
        const total_emojis = `${'```'}\n ${guild.emojis.cache.size.toLocaleString()} emojis ${'```'}`;
        const total_stickers = `${'```'}\n ${guild.stickers.cache.size.toLocaleString()} stickers ${'```'}`;
        const total_bans = `${'```'}\n ${guild.bans.cache.size.toLocaleString()} personnes bannies ${'```'}`;

        
        const embed = this.client.functions.embed()
            .setTitle('📊 Statiqtiques du serveur : 📊')
            .addField('🤖 Latence du bot 🤖', bot_latency, true)
            .addField('💻 Latence de l\'API 💻', API, true)
            .addField('🔰 Nom du serveur 🔰', server_name, false)
            .addField('🙌 Nombre de personnes 🙌', `${member_number}`, false)
            .addField('🎓 Rôles 🎓', `${total_roles}`, true)
            .addField('⌛ Crée le ⌛', created_time, true)
            .addField('💬 Salons textuels 💬', total_text_channels, false)
            .addField('🔊 Salons vocaux 🔊', total_voice_channels, false)
            .addField('🔗 Catégories 🔗', total_category, false)
            .addField('💯 Emojis 💯', total_emojis, true)
            .addField('🔴 Stickers 🔴', total_stickers, true)
            .addField('✅ Bannis ✅', total_bans, false)

        await sent_message.edit({
            content: null,
            embeds: [embed]
        })
        CONSOLE_LOG_CHANNEL.send(`${'```'}${moment().add(6, 'hours').format('LTS')} :  Commande exécuté : ${message.content}\nMembre : ${message.member.user.tag}, ${message.member.user.id} \nServeur : ${message.guild.name}, ${message.guild.id}\nSalon : ${message.channel.name}, ${message.channel.id} ${'```'}`)
    }
}

module.exports = StatsCommand;