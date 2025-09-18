import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { hasManageGuildPermission } from '@/lib/utils'

export async function GET(
  request: NextRequest,
  { params }: { params: { guildId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Verify user has manage permissions for this guild
    const guildsResponse = await fetch('https://discord.com/api/v10/users/@me/guilds', {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })

    if (!guildsResponse.ok) {
      return NextResponse.json({ error: 'Failed to verify permissions' }, { status: 403 })
    }

    const guilds = await guildsResponse.json()
    const guild = guilds.find((g: any) => g.id === params.guildId)
    
    if (!guild || !hasManageGuildPermission(guild.permissions)) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 })
    }

    // Get or create server settings
    let settings = await prisma.serverSettings.findUnique({
      where: {
        serverId_userId: {
          serverId: params.guildId,
          userId: session.user.id
        }
      }
    })

    if (!settings) {
      settings = await prisma.serverSettings.create({
        data: {
          serverId: params.guildId,
          userId: session.user.id,
          prefix: '!',
          moderation: true,
          automod: false
        }
      })
    }

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Error fetching settings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { guildId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()
    
    // Validate input
    if (data.prefix && (typeof data.prefix !== 'string' || data.prefix.length > 5)) {
      return NextResponse.json({ error: 'Invalid prefix' }, { status: 400 })
    }

    // Verify permissions (same as GET)
    const guildsResponse = await fetch('https://discord.com/api/v10/users/@me/guilds', {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })

    if (!guildsResponse.ok) {
      return NextResponse.json({ error: 'Failed to verify permissions' }, { status: 403 })
    }

    const guilds = await guildsResponse.json()
    const guild = guilds.find((g: any) => g.id === params.guildId)
    
    if (!guild || !hasManageGuildPermission(guild.permissions)) {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 })
    }

    // Update settings
    const settings = await prisma.serverSettings.upsert({
      where: {
        serverId_userId: {
          serverId: params.guildId,
          userId: session.user.id
        }
      },
      update: {
        ...data,
        updatedAt: new Date()
      },
      create: {
        serverId: params.guildId,
        userId: session.user.id,
        prefix: data.prefix || '!',
        moderation: data.moderation ?? true,
        automod: data.automod ?? false,
        welcomeChannel: data.welcomeChannel,
        logChannel: data.logChannel
      }
    })

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Error updating settings:', error)
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    )
  }
}