const { Client, GatewayIntentBits, userMention, User } = require('discord.js');
const dotenv = require('dotenv')
dotenv.config()

// getting access to servers, their messages and their message contents for use later
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });



client.on('ready', () => {
    console.log('The bot is ready');
})

client.on('messageCreate', (message) => {
    if (message.content === 'rock' && !message.author.bot) {
        message.reply('paper')
    }
    if (message.content === 'paper' && !message.author.bot) {
        message.reply('scissors')
    }
    if (message.content === 'scissors' && !message.author.bot) {
        message.reply('rock')
    }
})



client.login(process.env.TOKEN)