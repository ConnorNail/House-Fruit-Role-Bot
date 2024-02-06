const {Client, IntentsBitField} = require('discord.js')

const client = new Client ({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildModeration,
        IntentsBitField.Flags.GuildMessageTyping,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.MessageContent,
    ],
});
client.login('MTIwNDQxMDU1Njk1MDUxNTcxMg.GlC3dF.J_4qvkEF8BvkhkhYyshKXugK7nRx6me49S6GmY');
