const Discord = require('discord.js');
const client = new Discord.Client();

const request = require('request');

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
    if (message.content === '!check') {
        message.reply('Let me lol!');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);