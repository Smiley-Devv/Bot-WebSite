'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Server, Users, Bot } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getDiscordAvatarUrl, getDiscordGuildIconUrl } from '@/lib/utils'
import type { DiscordGuild } from '@/types/discord'

export default function Dashboard() {
  const { data: session } = useSession()
  const [guilds, setGuilds] = useState<DiscordGuild[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGuilds = async () => {
      try {
        const response = await fetch('/api/guilds')
        if (response.ok) {
          const data = await response.json()
          setGuilds(data)
        }
      } catch (error) {
        console.error('Error fetching guilds:', error)
      } finally {
        setLoading(false)
      }
    }

    if (session) {
      fetchGuilds()
    }
  }, [session])

  if (!session?.user) return null

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {session.user.username || session.user.name}!
        </h1>
        <p className="text-gray-400">
          Manage your Discord bot and server settings from here.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Your Profile
            </CardTitle>
            <Bot className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={getDiscordAvatarUrl(
                    session.user.discordId || '',
                    session.user.image?.split('/').pop()?.split('.')[0] || null,
                    session.user.discriminator
                  )}
                  alt={session.user.username || session.user.name || ''}
                />
                <AvatarFallback>
                  {(session.user.username || session.user.name || 'U')[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">
                  {session.user.username}#{session.user.discriminator}
                </p>
                <p className="text-xs text-gray-400">
                  ID: {session.user.discordId}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Manageable Servers
            </CardTitle>
            <Server className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {loading ? '...' : guilds.length}
            </div>
            <p className="text-xs text-gray-400">
              Servers where you have manage permissions
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">
              Bot Status
            </CardTitle>
            <div className="h-2 w-2 bg-green-500 rounded-full" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">Online</div>
            <p className="text-xs text-gray-400">
              Bot is running and responsive
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Your Servers</CardTitle>
          <CardDescription className="text-gray-400">
            Servers where you can manage the bot
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : guilds.length === 0 ? (
            <p className="text-gray-400 text-center py-8">
              No manageable servers found. Make sure you have Manage Server permissions.
            </p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {guilds.map((guild) => (
                <div
                  key={guild.id}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={getDiscordGuildIconUrl(guild.id, guild.icon)}
                      alt={guild.name}
                    />
                    <AvatarFallback>
                      {guild.name[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {guild.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {guild.owner ? 'Owner' : 'Manager'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}