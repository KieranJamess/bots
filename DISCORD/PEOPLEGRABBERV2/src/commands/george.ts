import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Interaction } from 'discord.js';

export const data = new SlashCommandBuilder().setName("george").setDescription("Replies with a picture of George")

export async function execute(interaction: CommandInteraction) {
    return interaction.reply("https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/69568462_2694469170584389_8495946130444517376_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-x0YR-M31S0AX8yebJP&tn=KuqJfgHhBVkgSG19&_nc_ht=scontent-lhr8-2.xx&oh=00_AT94TdAJepwjxUCsqTxJAADHOEbWF-gw1MsDCblwXcLOJQ&oe=63395B23")
}