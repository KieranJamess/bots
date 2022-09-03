import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Interaction } from 'discord.js';

export const data = new SlashCommandBuilder().setName("kieran").setDescription("Replies with a picture of Kieran")

export async function execute(interaction: CommandInteraction) {
    return interaction.reply("https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/288669217_5234066286668940_5140327591549564987_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HJtIolJN0ZcAX-CSvBr&_nc_ht=scontent-lhr8-1.xx&oh=00_AT_mocKAA34LbQAP3KazWIxQ5cgnPHAJVugwokGVVtYDcQ&oe=63193699")
}