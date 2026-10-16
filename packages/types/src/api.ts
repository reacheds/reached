/**
 * Web API & Dashboard Contract Types for Dispare
 */

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  timestamp: string;
}

export interface GuildSummary {
  id: string;
  name: string;
  icon: string | null;
  botPresent: boolean;
  memberCount?: number;
}

export interface UserProfile {
  id: string;
  discordId: string;
  username: string;
  avatar: string | null;
  role: "user" | "admin" | "maintainer";
  createdAt: string;
}

export interface GuildConfigUpdatePayload {
  prefix?: string;
  locale?: string;
  logChannelId?: string | null;
  welcomeChannelId?: string | null;
}
