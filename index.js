const Discord = require('discord.js')
const { Client } = require('discord.js');
require("dotenv").config()
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.once("ready", () => {
    console.log("The bot is now online!");
    client.user.setActivity("commands 🤖", {type: "WATCHING"})
});

client.login(process.env.TOKEN)