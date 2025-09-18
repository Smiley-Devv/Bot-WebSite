export interface DiscordGuild {
  id: string
  name: string
  icon: string | null
  owner: boolean
  permissions: string
  features: string[]
}

export interface DiscordUser {
  id: string
  username: string
  discriminator: string
  avatar: string | null
  email?: string
  verified?: boolean
}

export interface BotCommand {
  name: string
  description: string
  options?: any[]
}

export interface ServerSettings {
  id: string
  serverId: string
  prefix: string
  moderation: boolean
  automod: boolean
  welcomeChannel?: string
  logChannel?: string
}

export interface ModerationLog {
  id: string
  action: string
  target: string
  moderator: string
  reason?: string
  timestamp: string
}