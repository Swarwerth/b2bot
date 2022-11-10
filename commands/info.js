const { SlashCommandBuilder, EmbedBuilder, version } = require('discord.js');

module.exports =
{
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription("Donne des informations par rapport au B2Bot"),
    
    execute(interaction) {

        const clientAvatar = interaction.client.user.displayAvatarURL({ dynamic: true, size: 4096, format: 'png' });

        const embed = new EmbedBuilder()
            .setColor('#4287f5')
            .setAuthor({ name: `🤖 Informations sur ${interaction.client.user.tag}`, iconURL: clientAvatar, url: 'https://github.com/Swarwerth/b2bot' })
            .setThumbnail(clientAvatar)
            .addFields(
                { name: 'Auteur', value: `<@259302097197989888>`, inline: true },
                { name: 'Créé le', value: `<t:1666997233:D>`, inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: 'Statistiques', value: 
                    `\`${interaction.client.channels.cache.size} salons\`` +
                    `\n\`${interaction.client.users.cache.size} utilisateurs\``,
                    inline: true },
                {name: `Versions`, value:
                    `Discord.js : \`v${version}\`` +
                    `\nNode.js : \`${process.version}\``,
                    inline: true},
            )
            .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 4096, format: 'png' }) })
            .setTimestamp();

        interaction.reply({ embeds: [embed], ephemeral: true });

    }
}