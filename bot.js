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
            request
              .get('https://compliment-api.herokuapp.com/')
              .on('response', function(response) {
                console.log(response.statusCode)
                console.log(response.headers['content-type'])
                message.reply(response.statusCode)
              })
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);