// chmqp
import { DiscordUser, DiscordGuild } from '../types/discord';
import { siteConfig } from '../config/site.config';

const DISCORD_API_BASE = 'https://discord.com/api/v10';

export class DiscordService {
  static getAuthUrl(): string {
    // Validate configuration
    if (!siteConfig.discord.clientId || siteConfig.discord.clientId === 'YOUR_DISCORD_CLIENT_ID') {
      console.error('Discord client ID not configured');
      throw new Error('Discord client ID not configured. Please update the configuration.');
    }
    
    if (!siteConfig.discord.redirectUri) {
      console.error('Discord redirect URI not configured');
      throw new Error('Discord redirect URI not configured. Please update the configuration.');
    }

    const params = new URLSearchParams({
      client_id: siteConfig.discord.clientId,
      redirect_uri: siteConfig.discord.redirectUri,
      response_type: 'code',
      scope: siteConfig.discord.scopes.join(' ')
    });
    
    return `https://discord.com/api/oauth2/authorize?${params.toString()}`;
  }

  static async exchangeCodeForToken(code: string): Promise<string> {
    // This should be handled by your backend in production
    if (!code) {
      throw new Error('No authorization code provided');
    }

    const response = await fetch(`${DISCORD_API_BASE}/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: siteConfig.discord.clientId,
        client_secret: 'YOUR_CLIENT_SECRET_HERE', // This should be handled by your backend
        grant_type: 'authorization_code',
        code,
        redirect_uri: siteConfig.discord.redirectUri,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to exchange code for token');
    }

    const data = await response.json();
    return data.access_token;
  }

  static async getCurrentUser(token: string): Promise<DiscordUser> {
    if (!token) {
      throw new Error('No access token provided');
    }

    const response = await fetch(`${DISCORD_API_BASE}/users/@me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    return response.json();
  }

  static async getUserGuilds(token: string): Promise<DiscordGuild[]> {
    if (!token) {
      throw new Error('No access token provided');
    }

    const response = await fetch(`${DISCORD_API_BASE}/users/@me/guilds`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user guilds');
    }

    return response.json();
  }

  static getAvatarUrl(user: DiscordUser): string {
    if (!user.avatar) {
      return `https://cdn.discordapp.com/embed/avatars/${parseInt(user.discriminator) % 5}.png`;
    }
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`;
  }

  static getGuildIconUrl(guild: DiscordGuild): string {
    if (!guild.icon) {
      return '/default-server-icon.png';
    }
    return `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=64`;
  }
}
