const { SlashCommandBuilder } = require('discord.js');

module.exports =
{
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with the bot's ping!"),

    execute(interaction) {
        interaction.reply({ content: `🏓 Pong: \`${interaction.client.ws.ping} ms\``, ephemeral: true });
    },
};