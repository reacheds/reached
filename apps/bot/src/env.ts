import * as dotenv from "dotenv";
import { z } from "zod";

// Load .env from root if available
dotenv.config({ path: "../../.env" });

const envSchema = z.object({
  DISCORD_TOKEN: z.string().min(1, "DISCORD_TOKEN is required to run the bot."),
  DISCORD_CLIENT_ID: z.string().min(1, "DISCORD_CLIENT_ID is required for slash commands registration."),
  DATABASE_URL: z.string().url("DATABASE_URL must be a valid PostgreSQL connection URL."),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  DISCORD_DEV_GUILD_ID: z.string().optional(),
});

const parseEnv = () => {
  const parsed = envSchema.safeParse(process.env);
  if (!parsed.success) {
    console.error("❌ Invalid environment variables for @dispare/bot:");
    console.error(JSON.stringify(parsed.error.format(), null, 2));
    // In build or CI test environments we don't necessarily want to terminate if mocked
    if (process.env.NODE_ENV === "production") {
      process.exit(1);
    }
  }
  return parsed.data || (process.env as unknown as z.infer<typeof envSchema>);
};

export const env = parseEnv();
