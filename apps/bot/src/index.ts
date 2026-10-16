import { Client, Collection, GatewayIntentBits, REST, Routes } from "discord.js";
import { env } from "./env.js";
import * as pingCommand from "./commands/general/ping.js";
import * as readyEvent from "./events/ready.js";

console.log("🚀 [DISPARE BOT] İstemci başlatılıyor...");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});

const commands = new Collection<string, typeof pingCommand>();
commands.set(pingCommand.data.name, pingCommand);

client.once(readyEvent.name, (...args) => readyEvent.execute(...args));

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = commands.get(interaction.commandName);
  if (!command) {
    console.error(`Komut bulunamadı: ${interaction.commandName}`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error("Komut yürütülürken hata oluştu:", error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "❌ Komut yürütülürken beklenmeyen bir hata oluştu!",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "❌ Komut yürütülürken beklenmeyen bir hata oluştu!",
        ephemeral: true,
      });
    }
  }
});

async function registerSlashCommands() {
  if (!env.DISCORD_TOKEN || !env.DISCORD_CLIENT_ID) {
    console.warn("⚠️ DISCORD_TOKEN veya DISCORD_CLIENT_ID bulunamadı. Slash komut kaydı atlandı.");
    return;
  }

  const rest = new REST().setToken(env.DISCORD_TOKEN);
  const commandData = [pingCommand.data.toJSON()];

  try {
    console.log("🔄 Slash komutları kaydediliyor...");
    if (env.DISCORD_DEV_GUILD_ID) {
      await rest.put(
        Routes.applicationGuildCommands(env.DISCORD_CLIENT_ID, env.DISCORD_DEV_GUILD_ID),
        { body: commandData }
      );
      console.log(`✅ [DEV GUILD] Slash komutları '${env.DISCORD_DEV_GUILD_ID}' sunucusuna kaydedildi.`);
    } else {
      await rest.put(
        Routes.applicationCommands(env.DISCORD_CLIENT_ID),
        { body: commandData }
      );
      console.log("✅ [GLOBAL] Slash komutları Discord'a global olarak kaydedildi.");
    }
  } catch (error) {
    console.error("❌ Slash komutları kaydedilirken hata oluştu:", error);
  }
}

async function start() {
  if (!env.DISCORD_TOKEN) {
    console.warn("⚠️ DISCORD_TOKEN tanımlanmadığı için Discord bağlantısı kurulmadı. Lütfen .env dosyanızı doldurun.");
    return;
  }

  try {
    await registerSlashCommands();
    await client.login(env.DISCORD_TOKEN);
  } catch (error) {
    console.error("❌ Bot giriş yaparken hata oluştu:", error);
  }
}

start();
