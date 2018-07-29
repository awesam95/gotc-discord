const Discord = require('discord.js');
const client = new Discord.Client();

var request = require('request');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

client.on('message', message => {
    if (message.content === '!gotc') {
        message.reply('Let me check!');
    }
});

client.on('message', message => {
    if (message.content === '!compliment') {
            request('https://compliment-api.herokuapp.com/', function (error, response, body) {
            message.reply(body);
        });
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);