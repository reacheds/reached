import { boolean, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const guilds = pgTable("guilds", {
  id: varchar("id", { length: 32 }).primaryKey(), // Discord Guild ID
  name: varchar("name", { length: 128 }).notNull(),
  iconUrl: text("icon_url"),
  prefix: varchar("prefix", { length: 8 }).default("!").notNull(),
  locale: varchar("locale", { length: 8 }).default("tr").notNull(),
  logChannelId: varchar("log_channel_id", { length: 32 }),
  welcomeChannelId: varchar("welcome_channel_id", { length: 32 }),
  isBotPresent: boolean("is_bot_present").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Guild = typeof guilds.$inferSelect;
export type NewGuild = typeof guilds.$inferInsert;
