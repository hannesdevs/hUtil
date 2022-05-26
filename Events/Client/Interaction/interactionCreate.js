const {
    Client,
    CommandInteraction,
    MessageEmbed
} = require("discord.js");
const {
    execute
} = require("../ready");

module.exports = {
    name: "InteractionCreate",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return interaction.reply({
                embeds: [
                    new MessageEmbed()
                    .setColor("RED")
                    .setDescription("❌ An error occurred while running this command.")
                ]
            }) && client.commands.delete(interaction.commandName);

            commands.execute(interaction, client)
        }
    }
}