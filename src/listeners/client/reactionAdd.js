const { Listener } = require('discord-akairo');
const moment = require('moment');

class ReactionAddListener extends Listener {
    constructor() {
        super('messageReactionAdd', {
            emitter: 'client',
            event: 'messageReactionAdd'
        });
    }

    exec(event) {

            if(event.d.message_id === "929436520312627251"){
                let guild = client.guilds.cache.get(event.d.guild_id)
                let member = guild.members.cache.get(event.d.user_id)
                let channel = guild.channels.cache.get(event.d.channel_id)
    
                if(event.d.emoji.name === "1️⃣"){
                member.roles.add("929424572867051590")
    
                }
    
                if(event.d.emoji.name === "2️⃣"){
                    member.roles.add("929424687048556615")
    
                }
    
                if(event.d.emoji.name === "3️⃣"){
                    member.roles.add("929424753205317662")
                }

                if(event.d.emoji.name === "4️⃣"){
                    member.roles.add("929424815666892811")
            }
    }
}}

module.exports = ReactionAddListener;