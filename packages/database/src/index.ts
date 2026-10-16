import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema/index";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn("⚠️ DATABASE_URL is not set. Database client will not connect until configured.");
}

const client = postgres(connectionString || "postgresql://localhost:5432/dispare_db", {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
});

export const db = drizzle(client, { schema });
export * from "./schema/index";
export { sql, eq, and, or, desc, asc } from "drizzle-orm";
