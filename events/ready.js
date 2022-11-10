const { Events } = require('discord.js');

module.exports =
{
    name: Events.ClientReady,
    once: true,
    
    execute(client) {
        client.user.setPresence({ activities: [{ name: 'BackToBasics - EPITA', type: 1, url: 'https://twitch.tv/swarwerth' }], status: 'online' })
        console.log(`Ready! Logged in as ${client.user.tag}`);
    }
}