import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  discordId: varchar("discord_id", { length: 32 }).notNull().unique(),
  username: varchar("username", { length: 64 }).notNull(),
  discriminator: varchar("discriminator", { length: 8 }),
  avatarUrl: text("avatar_url"),
  role: varchar("role", { length: 16 }).default("user").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
