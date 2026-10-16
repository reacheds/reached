import { db, guilds } from "@dispare/database";
import { type Client, Events } from "discord.js";

export const name = Events.ClientReady;
export const once = true;

export async function execute(client: Client<true>) {
  console.log(`[bot] authenticated as ${client.user.tag}`);
  console.log(`[bot] guild count: ${client.guilds.cache.size}`);

  try {
    for (const [guildId, guild] of client.guilds.cache) {
      await db
        .insert(guilds)
        .values({
          id: guildId,
          name: guild.name,
          iconUrl: guild.iconURL(),
          isBotPresent: true,
        })
        .onConflictDoUpdate({
          target: guilds.id,
          set: {
            name: guild.name,
            iconUrl: guild.iconURL(),
            isBotPresent: true,
            updatedAt: new Date(),
          },
        });
    }
    console.log("[database] synchronized guild state");
  } catch {
    console.warn("[database] guild sync skipped (connection unavailable)");
  }
}
