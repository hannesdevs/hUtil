const Discord = require('discord.js')
const {
    Client,
    Collection
} = require('discord.js');
require("dotenv").config()
const {
    promisify
} = require("util")
const {
    glob
} = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table");
const client = new Discord.Client({
    intents: 32767
})

client.commands = new Discord.Collection();

require("../Structures/Handlers/Events")(client);
require("../Structures/Handlers/commands")(client);


client.login(process.env.TOKEN)