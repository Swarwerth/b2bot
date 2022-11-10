const { SlashCommandBuilder } = require('discord.js');

module.exports =
{
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("Votai Test.")
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The category')
                .setRequired(true)
                .addChoices(
                    { name: 'Hello', value: 'hello' },
                    { name: 'Bonjour', value: 'bonjour' },
                    { name: 'Hola', value: 'hola' },
                )),

    execute(interaction) {
        interaction.reply({ content: interaction.options.getString('category'), ephemeral: true });
    },
};