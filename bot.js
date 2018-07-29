const Discord = require('discord.js');
const client = new Discord.Client();

const request = require('request');

function get_compliment() {
    request('https://spreadsheets.google.com/feeds/list/1eEa2ra2yHBXVZ_ctH4J15tFSGEu-VTSunsrvaCAV598/od6/public/values?alt=json', function(err, response, body) {
            var data = JSON.parse(body);
            var rndInt = getRandomInt(0, data.feed.entry.length - 1);
            var compliment = data.feed.entry[rndInt]['gsx$compliments']['$t'];
            if(compliment) {
              res.status(200).send(compliment);
              var got_compliment = compliment;
            } else {
              res.status(404).send("Couldn't retrieve compliment, try again");
              var got_compliment = 'You are super hot :fire:';
            }
          });
}

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
        message.reply(get_compliment());
    }
});

client.on('message', message => {
    if (message.content === '!check') {
        message.reply('Let me lol!');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);