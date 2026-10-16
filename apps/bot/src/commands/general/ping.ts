import type { BotCommandMetadata } from "@dispare/types";
import { type ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const metadata: BotCommandMetadata = {
  name: "ping",
  description: "Botun ve API'nin gecikme sürelerini kontrol eder.",
  category: "general",
};

export const data = new SlashCommandBuilder()
  .setName(metadata.name)
  .setDescription(metadata.description);

export async function execute(interaction: ChatInputCommandInteraction) {
  const sent = await interaction.reply({
    content: "🏓 Pong hesaplanıyor...",
    fetchReply: true,
  });

  const latency = sent.createdTimestamp - interaction.createdTimestamp;
  const apiLatency = Math.round(interaction.client.ws.ping);

  await interaction.editReply({
    content: `🏓 **Pong!**\n⏱️ Mesaj Gecikmesi: \`${latency}ms\`\n🌐 Discord API Gecikmesi: \`${apiLatency}ms\``,
  });
}
