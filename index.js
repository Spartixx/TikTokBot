const GotoClient = require('./src/structures/Gotoclient')

const { MusicBot } = require('discord-music-system'); // Require the best package ever created on NPM (= require discord-music-system)

let client = new GotoClient({
    prefix: '/'
});

client.start()