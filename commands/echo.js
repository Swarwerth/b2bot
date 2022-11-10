// Does not work if we want to add some lines...

const { SlashCommandBuilder, ChannelType, EmbedBuilder } = require('discord.js');

module.exports =
{
    data: new SlashCommandBuilder()
        .setName("echo")
        .setDescription("Send an announcement in a precise channel")
        .setDescriptionLocalizations({ fr: "Envoie un message d'annonce dans un salon précis" })
        .addStringOption(option =>
            option.setName('title')
                .setNameLocalizations({ fr: 'titre' })
                .setDescription("The title of the announcement")
                .setDescriptionLocalizations({ fr: "Le titre de l'annonce" })
                .setRequired(true))
        .addStringOption(option =>
            option.setName('content')
                .setNameLocalizations({ fr: "contenu" })
                .setDescription("The content of the message to send")
                .setDescriptionLocalizations({ fr: "Le contenu du message à envoyé" })
                .setRequired(true))
        .addChannelOption(option =>
            option.setName('channel')
                .setNameLocalizations({ fr: "salon" })
                .setDescription('The channel to echo into')
                .setDescriptionLocalizations({ fr: "Le salon où le message sera envoyé" })
                .addChannelTypes(ChannelType.GuildText)),

    execute(interaction) {
        interaction.reply({ content: "Message sent!", ephemeral: true });

        var c = interaction.options.getChannel('channel') ?? interaction.channel;
        const serverIcon = interaction.guild.iconURL({ dynamic: true, size: 4096, format: 'png' });

        const embed = new EmbedBuilder()
            .setColor('#eb4034')
            .setAuthor({ name: `📣 Annonce de BackToBasics`, iconURL: serverIcon, url: 'https://discord.gg/zBD948F5Tj' })
            .setThumbnail(serverIcon)
            .setDescription(interaction.options.getString('content'))
            // .addFields({ name: interaction.options.getString('title'), value: interaction.options.getString('content'), inline: false })
            .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 4096, format: 'png' }) })
            .setTimestamp();

        c.send({ embeds: [embed] });
    },
};