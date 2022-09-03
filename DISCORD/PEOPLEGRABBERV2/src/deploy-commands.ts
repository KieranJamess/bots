import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import config from "./config";
import * as commandModule from "./commands"

type Command = {
    data : SlashCommandBuilder
}

const commands = [];

for (const module of Object.values<any>(commandModule)) {
    commands.push(module.data)
}

const rest = new REST({ version: '9' }).setToken(config.TOKEN)

rest.put(Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID), {body: commands} ).then(() => {
    console.log("Successfully registered application commands")
}).catch(console.error)