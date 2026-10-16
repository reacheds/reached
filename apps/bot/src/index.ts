import { Client, Collection, GatewayIntentBits, REST, Routes } from "discord.js";
import { env } from "./env";
import * as pingCommand from "./commands/general/ping";
import * as readyEvent from "./events/ready";

console.log("[bot] initializing client");

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
    console.error(`[bot] unknown command: ${interaction.commandName}`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(`[bot] execution failure for /${interaction.commandName}:`, error);
    const reply = {
      content: "An unexpected error occurred while processing this request.",
      ephemeral: true,
    };
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp(reply);
    } else {
      await interaction.reply(reply);
    }
  }
});

async function registerSlashCommands() {
  if (!env.DISCORD_TOKEN || !env.DISCORD_CLIENT_ID) {
    console.warn("[bot] missing credentials; skipped command registration");
    return;
  }

  const rest = new REST().setToken(env.DISCORD_TOKEN);
  const commandData = [pingCommand.data.toJSON()];

  try {
    console.log("[bot] deploying application commands");
    if (env.DISCORD_DEV_GUILD_ID) {
      await rest.put(
        Routes.applicationGuildCommands(env.DISCORD_CLIENT_ID, env.DISCORD_DEV_GUILD_ID),
        { body: commandData }
      );
      console.log(`[bot] deployed commands to guild ${env.DISCORD_DEV_GUILD_ID}`);
    } else {
      await rest.put(
        Routes.applicationCommands(env.DISCORD_CLIENT_ID),
        { body: commandData }
      );
      console.log("[bot] deployed commands globally");
    }
  } catch (error) {
    console.error("[bot] failed to deploy application commands:", error);
  }
}

async function start() {
  if (!env.DISCORD_TOKEN) {
    console.warn("[bot] DISCORD_TOKEN is not configured");
    return;
  }

  try {
    await registerSlashCommands();
    await client.login(env.DISCORD_TOKEN);
  } catch (error) {
    console.error("[bot] login failed:", error);
  }
}

start();
