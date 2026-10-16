export interface BotCommandOption {
  name: string;
  description: string;
  required?: boolean;
}

export interface BotCommandMetadata {
  name: string;
  description: string;
  category: "general" | "moderation" | "utility" | "admin";
  options?: BotCommandOption[];
  devOnly?: boolean;
}

export interface BotCommandContext {
  guildId: string | null;
  userId: string;
  channelId: string;
  createdTimestamp: number;
}

export interface BotCommandResult {
  success: boolean;
  message?: string;
  data?: Record<string, unknown>;
}

export interface BotEventMetadata {
  name: string;
  once?: boolean;
}
