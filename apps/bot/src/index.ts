import { Client, Collection, GatewayIntentBits, REST, Routes } from "discord.js";
import { env } from "./env.js";
import * as pingCommand from "./commands/general/ping.js";
import * as readyEvent from "./events/ready.js";

console.log("🚀 [DISPARE BOT] Initializing client...");

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
    console.error(`Command not found: ${interaction.commandName}`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error("Error executing command:", error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "❌ An unexpected error occurred while executing this command!",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "❌ An unexpected error occurred while executing this command!",
        ephemeral: true,
      });
    }
  }
});

async function registerSlashCommands() {
  if (!env.DISCORD_TOKEN || !env.DISCORD_CLIENT_ID) {
    console.warn("⚠️ DISCORD_TOKEN or DISCORD_CLIENT_ID not found. Skipping slash command registration.");
    return;
  }

  const rest = new REST().setToken(env.DISCORD_TOKEN);
  const commandData = [pingCommand.data.toJSON()];

  try {
    console.log("🔄 Registering slash commands...");
    if (env.DISCORD_DEV_GUILD_ID) {
      await rest.put(
        Routes.applicationGuildCommands(env.DISCORD_CLIENT_ID, env.DISCORD_DEV_GUILD_ID),
        { body: commandData }
      );
      console.log(`✅ [DEV GUILD] Slash commands registered to guild '${env.DISCORD_DEV_GUILD_ID}'.`);
    } else {
      await rest.put(
        Routes.applicationCommands(env.DISCORD_CLIENT_ID),
        { body: commandData }
      );
      console.log("✅ [GLOBAL] Slash commands registered globally to Discord.");
    }
  } catch (error) {
    console.error("❌ Error registering slash commands:", error);
  }
}

async function start() {
  if (!env.DISCORD_TOKEN) {
    console.warn("⚠️ DISCORD_TOKEN is not defined. Discord connection skipped. Please fill out your .env file.");
    return;
  }

  try {
    await registerSlashCommands();
    await client.login(env.DISCORD_TOKEN);
  } catch (error) {
    console.error("❌ Error logging in bot:", error);
  }
}

start();
