import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Interaction } from 'discord.js';

export const data = new SlashCommandBuilder().setName("matt").setDescription("Replies with a picture of Matt")

export async function execute(interaction: CommandInteraction) {
    return interaction.reply("https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/282563039_2608375532628559_2426358966079844424_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6-c4h73zUtMAX_E65nF&_nc_ht=scontent-lhr8-2.xx&oh=00_AT_1pO1Fb8uwgRgySK4mRCnx8ela2DeuZTaBYw3Llj-gZg&oe=6317CE71")
}