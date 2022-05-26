const Discord = require('discord.js')
const { Client } = require('discord.js');
require("dotenv").config()
const client = new Discord.Client({intents: 14023})

require("./Handlers/Events")(client);


client.login(process.env.TOKEN)