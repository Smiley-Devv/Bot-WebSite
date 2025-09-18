'use client'

import { useEffect, useState } from 'react'
import { Terminal, Play, Loader2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { BotCommand, DiscordGuild } from '@/types/discord'

export default function CommandsPage() {
  const [commands, setCommands] = useState<BotCommand[]>([])
  const [guilds, setGuilds] = useState<DiscordGuild[]>([])
  const [selectedGuild, setSelectedGuild] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [executing, setExecuting] = useState<string | null>(null)
  const [responses, setResponses] = useState<Record<string, any>>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [commandsRes, guildsRes] = await Promise.all([
          fetch('/api/commands'),
          fetch('/api/guilds')
        ])

        if (commandsRes.ok) {
          const commandsData = await commandsRes.json()
          setCommands(commandsData)
        }

        if (guildsRes.ok) {
          const guildsData = await guildsRes.json()
          setGuilds(guildsData)
          if (guildsData.length > 0) {
            setSelectedGuild(guildsData[0].id)
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const executeCommand = async (command: BotCommand) => {
    if (!selectedGuild) return

    setExecuting(command.name)
    try {
      const response = await fetch('/api/commands', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          command: command.name,
          guildId: selectedGuild,
          options: {}
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setResponses(prev => ({
          ...prev,
          [command.name]: data
        }))
      }
    } catch (error) {
      console.error('Error executing command:', error)
      setResponses(prev => ({
        ...prev,
        [command.name]: { success: false, message: 'Failed to execute command' }
      }))
    } finally {
      setExecuting(null)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Bot Commands</h1>
        <p className="text-gray-400">
          Execute bot commands directly from the dashboard
        </p>
      </div>

      {guilds.length > 0 && (
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Select Server</CardTitle>
            <CardDescription className="text-gray-400">
              Choose which server to execute commands in
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="guild-select" className="text-gray-300">Server</Label>
              <select
                id="guild-select"
                value={selectedGuild}
                onChange={(e) => setSelectedGuild(e.target.value)}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white"
              >
                {guilds.map((guild) => (
                  <option key={guild.id} value={guild.id}>
                    {guild.name}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {commands.map((command) => (
          <Card key={command.name} className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-blue-500" />
                /{command.name}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {command.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {command.options && command.options.length > 0 && (
                <div className="space-y-2">
                  <Label className="text-gray-300">Options:</Label>
                  {command.options.map((option: any, index: number) => (
                    <div key={index} className="text-sm text-gray-400">
                      • {option.name}: {option.description}
                      {option.required && <span className="text-red-400"> (required)</span>}
                    </div>
                  ))}
                </div>
              )}

              <Button
                onClick={() => executeCommand(command)}
                disabled={!selectedGuild || executing === command.name}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {executing === command.name ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Executing...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Execute Command
                  </>
                )}
              </Button>

              {responses[command.name] && (
                <div className={`p-3 rounded-md text-sm ${
                  responses[command.name].success
                    ? 'bg-green-900/20 border border-green-800 text-green-300'
                    : 'bg-red-900/20 border border-red-800 text-red-300'
                }`}>
                  <div className="font-medium mb-1">Response:</div>
                  <div>{responses[command.name].message}</div>
                  {responses[command.name].timestamp && (
                    <div className="text-xs opacity-75 mt-1">
                      {new Date(responses[command.name].timestamp).toLocaleString()}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {commands.length === 0 && (
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="text-center py-8">
            <Terminal className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No commands available</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}