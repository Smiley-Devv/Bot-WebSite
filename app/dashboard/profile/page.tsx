'use client'

import { useSession } from 'next-auth/react'
import { User, Mail, Hash, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getDiscordAvatarUrl } from '@/lib/utils'

export default function ProfilePage() {
  const { data: session } = useSession()

  if (!session?.user) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
        <p className="text-gray-400">
          Your Discord account information and dashboard settings
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <User className="w-5 h-5 text-blue-500" />
              Discord Profile
            </CardTitle>
            <CardDescription className="text-gray-400">
              Your Discord account information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src={getDiscordAvatarUrl(
                    session.user.discordId || '',
                    session.user.image?.split('/').pop()?.split('.')[0] || null,
                    session.user.discriminator
                  )}
                  alt={session.user.username || session.user.name || ''}
                />
                <AvatarFallback className="text-2xl">
                  {(session.user.username || session.user.name || 'U')[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {session.user.username || session.user.name}
                </h3>
                <p className="text-gray-400">
                  #{session.user.discriminator}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Hash className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-300">Discord ID</p>
                  <p className="text-sm text-gray-400 font-mono">
                    {session.user.discordId}
                  </p>
                </div>
              </div>

              {session.user.email && (
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-300">Email</p>
                    <p className="text-sm text-gray-400">
                      {session.user.email}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-500" />
              Dashboard Activity
            </CardTitle>
            <CardDescription className="text-gray-400">
              Your dashboard usage statistics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-xs text-gray-400">Commands Executed</div>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-xs text-gray-400">Settings Changed</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Last Login</span>
                <span className="text-gray-400">Just now</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Account Created</span>
                <span className="text-gray-400">Recently</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Permissions</CardTitle>
          <CardDescription className="text-gray-400">
            Your current permissions and access levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <span className="text-gray-300">Dashboard Access</span>
              <span className="px-2 py-1 bg-green-900/20 text-green-400 rounded text-xs">
                Granted
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <span className="text-gray-300">Server Management</span>
              <span className="px-2 py-1 bg-green-900/20 text-green-400 rounded text-xs">
                Available
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <span className="text-gray-300">Command Execution</span>
              <span className="px-2 py-1 bg-green-900/20 text-green-400 rounded text-xs">
                Enabled
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}