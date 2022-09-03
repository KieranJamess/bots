import { Client } from "discord.js";
import config from "./config";
import DiscordJS from 'discord.js';
import * as commandModules from "./commands"

const commands = Object(commandModules)

export const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"]
});

client.once("ready", () => {
    console.log("Bot ready")
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) {
        return console.log("Command not important")
    }
    const { commandName } = interaction;
    commands[commandName].execute(interaction, client)
})

client.login(config.TOKEN)