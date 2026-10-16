import { db, guilds } from "@dispare/database";
import type { Client } from "discord.js";

export const name = "ready";
export const once = true;

export async function execute(client: Client<true>) {
  console.log(`🤖 [DISPARE BOT] Başarıyla giriş yapıldı: ${client.user.tag}`);
  console.log(`📡 [DISPARE BOT] Aktif Sunucu Sayısı: ${client.guilds.cache.size}`);

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
    console.log("✅ [DATABASE] Sunucu kayıtları veritabanına başarıyla senkronize edildi.");
  } catch (error) {
    console.warn("⚠️ [DATABASE] Başlangıç senkronizasyonu atlandı (Veritabanı bağlantısı yok veya yapılandırılmadı).");
  }
}
