const { Schema, model } = require('mongoose');

const guildShema = Schema({
    id: String,
    prefix: {
        type: String,
        default: '/'
    }
})

module.exports = {
    Guild: model('Guild', guildShema)
}

