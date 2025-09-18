'use client'

import { useEffect, useState } from 'react'
import { Settings, Save, Loader2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import type { DiscordGuild, ServerSettings } from '@/types/discord'

export default function SettingsPage() {
  const [guilds, setGuilds] = useState<DiscordGuild[]>([])
  const [selectedGuild, setSelectedGuild] = useState<string>('')
  const [settings, setSettings] = useState<ServerSettings | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  useEffect(() => {
    const fetchGuilds = async () => {
      try {
        const response = await fetch('/api/guilds')
        if (response.ok) {
          const data = await response.json()
          setGuilds(data)
          if (data.length > 0) {
            setSelectedGuild(data[0].id)
          }
        }
      } catch (error) {
        console.error('Error fetching guilds:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGuilds()
  }, [])

  useEffect(() => {
    if (selectedGuild) {
      fetchSettings(selectedGuild)
    }
  }, [selectedGuild])

  const fetchSettings = async (guildId: string) => {
    try {
      const response = await fetch(`/api/settings/${guildId}`)
      if (response.ok) {
        const data = await response.json()
        setSettings(data)
      }
    } catch (error) {
      console.error('Error fetching settings:', error)
    }
  }

  const saveSettings = async () => {
    if (!selectedGuild || !settings) return

    setSaving(true)
    setMessage(null)

    try {
      const response = await fetch(`/api/settings/${selectedGuild}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      })

      if (response.ok) {
        const updatedSettings = await response.json()
        setSettings(updatedSettings)
        setMessage({ type: 'success', text: 'Settings saved successfully!' })
      } else {
        throw new Error('Failed to save settings')
      }
    } catch (error) {
      console.error('Error saving settings:', error)
      setMessage({ type: 'error', text: 'Failed to save settings' })
    } finally {
      setSaving(false)
    }
  }

  const updateSetting = (key: keyof ServerSettings, value: any) => {
    if (settings) {
      setSettings({ ...settings, [key]: value })
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
        <h1 className="text-3xl font-bold text-white mb-2">Server Settings</h1>
        <p className="text-gray-400">
          Configure bot settings for your servers
        </p>
      </div>

      {guilds.length > 0 && (
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Select Server</CardTitle>
            <CardDescription className="text-gray-400">
              Choose which server to configure
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

      {settings && (
        <div className="space-y-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-500" />
                Basic Settings
              </CardTitle>
              <CardDescription className="text-gray-400">
                Configure basic bot behavior
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="prefix" className="text-gray-300">Command Prefix</Label>
                <Input
                  id="prefix"
                  value={settings.prefix}
                  onChange={(e) => updateSetting('prefix', e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="!"
                  maxLength={5}
                />
                <p className="text-xs text-gray-500">
                  The prefix used for bot commands (max 5 characters)
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Moderation</Label>
                    <p className="text-xs text-gray-500">
                      Enable basic moderation features
                    </p>
                  </div>
                  <Switch
                    checked={settings.moderation}
                    onCheckedChange={(checked) => updateSetting('moderation', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-gray-300">Auto Moderation</Label>
                    <p className="text-xs text-gray-500">
                      Automatically moderate messages
                    </p>
                  </div>
                  <Switch
                    checked={settings.automod}
                    onCheckedChange={(checked) => updateSetting('automod', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Channel Settings</CardTitle>
              <CardDescription className="text-gray-400">
                Configure channel-specific settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="welcome-channel" className="text-gray-300">Welcome Channel ID</Label>
                <Input
                  id="welcome-channel"
                  value={settings.welcomeChannel || ''}
                  onChange={(e) => updateSetting('welcomeChannel', e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="Channel ID for welcome messages"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="log-channel" className="text-gray-300">Log Channel ID</Label>
                <Input
                  id="log-channel"
                  value={settings.logChannel || ''}
                  onChange={(e) => updateSetting('logChannel', e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="Channel ID for moderation logs"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button
              onClick={saveSettings}
              disabled={saving}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Settings
                </>
              )}
            </Button>
          </div>

          {message && (
            <div className={`p-4 rounded-md ${
              message.type === 'success'
                ? 'bg-green-900/20 border border-green-800 text-green-300'
                : 'bg-red-900/20 border border-red-800 text-red-300'
            }`}>
              {message.text}
            </div>
          )}
        </div>
      )}

      {guilds.length === 0 && (
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="text-center py-8">
            <Settings className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No manageable servers found</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}