const { MessageEmbed } = require('discord.js')
const { BLUE_COLOR } = require('../../config')

module.exports = {
    embed: function(){
        return new MessageEmbed()
        .setColor(BLUE_COLOR)
        .setTimestamp()
        .setFooter('By Spartix#0001')
    }
}