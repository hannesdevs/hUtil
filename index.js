const Discord = require('discord.js')
const {
    Client,
    Collection
} = require('discord.js');
require("dotenv").config()
const client = new Discord.Client({
    intents: 131071
})

client.commands = new Discord.Collection();

require("./Handlers/Events")(client);
require("./Handlers/commands")(client);


client.login(process.env.TOKEN)