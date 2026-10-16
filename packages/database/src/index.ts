import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema/index.js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  // If no env is set, provide a warning for dev/build stages
  console.warn("⚠️ DATABASE_URL is not set. Database client will not connect until configured.");
}

// Global postgres client
const client = postgres(connectionString || "postgresql://localhost:5432/dispare_db", {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
});

export const db = drizzle(client, { schema });
export * from "./schema/index.js";
export { sql, eq, and, or, desc, asc } from "drizzle-orm";
