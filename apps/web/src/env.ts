import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config({ path: "../../.env" });

const envSchema = z.object({
  DATABASE_URL: z.string().url("DATABASE_URL must be a valid PostgreSQL connection URL.").optional(),
  AUTH_SECRET: z.string().min(10, "AUTH_SECRET must be at least 10 characters long.").optional(),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

const parseEnv = () => {
  const parsed = envSchema.safeParse(process.env);
  if (!parsed.success) {
    console.warn("[env] validation warning for @dispare/web:");
    console.warn(JSON.stringify(parsed.error.format(), null, 2));
  }
  return parsed.data || (process.env as unknown as z.infer<typeof envSchema>);
};

export const env = parseEnv();
