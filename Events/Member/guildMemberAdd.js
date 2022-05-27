const {
    MessageEmbed,
    WebhookClient,
    GuildMember
} = require("discord.js")
const {
    execute
} = require("../Client/interactionCreate")

module.exports = {
    name: "guildMemberAdd",
    /**
     * @param {GuildMember} member
     */
    execute(member) {

        const {
            user,
            guild
        } = member;

        member.roles.add("674996720131768320")
        const Welcomer = new WebhookClient({
            id: "979709481090969620",
            token: "Akoo9rnbCc3igq1wLXT0OZlg47u2JYlgzNwJUJhNRB1mBxjNWLu18vNiQZfTTXIzRe2w"
        });

        const Welcome = new MessageEmbed()
            .setColor("AQUA")
            .setAuthor({
                name: '',
                iconURL: '',
                url: ''
            })
            .setThumbnail(user.tag, user.avatarURL({
                dynamic: true,
                size: 512
            }))
            .setDescription(`
            Welcome ${member} to the **${guild.name}**!\n
            Account Created <t:${parseInt(user.createdTimestamp / 1000)}:R>\nLatest Member Count: **${guild.memberCount}**`)
            .setFooter({
                text: '',
                iconURL: ''
            });

        Welcomer.send({
            embeds: [Welcome]
        })
    }
}