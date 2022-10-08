const { Client, GatewayIntentBits, userMention, User, MessageFlags } = require('discord.js');
const dotenv = require('dotenv')
dotenv.config()

// getting access to servers, their messages and their message contents for use later
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const rpsArr = ["rock", "paper", "scissors"];

// function rpsRand(rpsArr) {
//     const randomIndex = Math.floor(Math.random() * rpsArr.length);

//     const item = rpsArr[randomIndex];

//     return item;
// 


client.on('ready', () => {
    console.log('The bot is ready');
})

client.on('messageCreate', (message) => {
    
    const randomMessage = rpsArr[Math.floor(Math.random() * rpsArr.length)];

    if (message.content === 'rock' && !message.author.bot) {
        message.reply(randomMessage);
    }
    if (message.content === 'paper' && !message.author.bot) {
        message.reply(randomMessage);
    }
    if (message.content === 'scissors' && !message.author.bot) {
        message.reply(randomMessage);
    }
})



client.login(process.env.TOKEN)