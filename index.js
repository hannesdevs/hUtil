const Discord = require('discord.js')
const {
    Client,
    Collection
} = require('discord.js');
require("dotenv").config()
const client = new Discord.Client({
    intents: 14023
})

client.commands = new Collection()

require("./Handlers/Events")(client);
require("./Handlers/commands")(client);


client.login(process.env.TOKEN)