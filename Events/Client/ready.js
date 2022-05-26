const { Client } = require("discord.js")


module.exports = {
    name: "ready",
    once: true,
/**
 * @param {Client} client
 */ 
    execute(client) {
        console.log("The client is ready! 🤩✔")
        client.user.setActivity("Under construction ⚡🚧", {type: "WATCHING"})
    }
}