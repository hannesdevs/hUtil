const {
    MessageEmbed,
    WebhookClient,
    GuildMember
} = require("discord.js")
const {
    execute
} = require("../Client/interactionCreate")

module.exports = {
    name: "guildMemberRemove",
    /**
     * @param {GuildMember} member
     */
    execute(member) {

        const {
            user,
            guild
        } = member;

        const Loger = new WebhookClient({
            id: "979765815438098523",
            token: "OkiCHZw-UMFyKW8ah1DCT1cL1hm7I7L1zxIPzbsU0HHJjLUyMCVzF8ptzVetln2R78Un"
        });

        const Welcome = new MessageEmbed()
            .setColor("RED")
            .setAuthor(user.tag, user.avatarURL({
                dynamic: true,
                size: 512
            }))
            .setThumbnail(user.avatarURL({
                dynamic: true,
                size: 512
            }))
            .setDescription(`
            ${member} has left the server\n
            Joined: <t:${parseInt(member.joinedTimestamp / 1000)}:R>\nLatest Member Count: **${guild.memberCount}**`)
            .setFooter(`ID: ${user.id}`)

        Loger.send({
            embeds: [Welcome]
        })
    }
}