import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDiscordAvatarUrl(userId: string, avatar: string | null, discriminator?: string): string {
  if (!avatar) {
    const defaultAvatar = discriminator ? parseInt(discriminator) % 5 : 0
    return `https://cdn.discordapp.com/embed/avatars/${defaultAvatar}.png`
  }
  return `https://cdn.discordapp.com/avatars/${userId}/${avatar}.png?size=128`
}

export function getDiscordGuildIconUrl(guildId: string, icon: string | null): string {
  if (!icon) {
    return '/default-server-icon.png'
  }
  return `https://cdn.discordapp.com/icons/${guildId}/${icon}.png?size=64`
}

export function hasManageGuildPermission(permissions: string): boolean {
  const MANAGE_GUILD = 0x20
  return (parseInt(permissions) & MANAGE_GUILD) === MANAGE_GUILD
}