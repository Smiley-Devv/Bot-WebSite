// chmqp
import { Command } from '../../types/commands';

export const moderationCommands: Command[] = [
  {
    name: '/ban user',
    description: 'Ban a user from the server',
    usage: '/ban <user> [reason]',
    permissions: ['BAN_MEMBERS']
  },
  {
    name: '/kick user',
    description: 'Kick a user from the server',
    usage: '/kick <user> [reason]',
    permissions: ['KICK_MEMBERS']
  },
  {
    name: '/kickall role',
    description: 'Kick all users with a specific role',
    usage: '/kickall <role>',
    permissions: ['KICK_MEMBERS']
  },
  {
    name: '/lockdown blacklist-add',
    description: 'Add channel to lockdown blacklist',
    usage: '/lockdown blacklist-add <channel>',
    permissions: ['MANAGE_CHANNELS']
  },
  {
    name: '/lockdown blacklist-remove',
    description: 'Remove channel from lockdown blacklist',
    usage: '/lockdown blacklist-remove <channel>',
    permissions: ['MANAGE_CHANNELS']
  },
  {
    name: '/lockdown commit',
    description: 'Lock down the server',
    usage: '/lockdown commit',
    permissions: ['MANAGE_CHANNELS']
  },
  {
    name: '/lockdown unlock',
    description: 'Remove server lockdown',
    usage: '/lockdown unlock',
    permissions: ['MANAGE_CHANNELS']
  },
  {
    name: '/mass-unban',
    description: 'Unban all banned users',
    usage: '/mass-unban',
    permissions: ['BAN_MEMBERS']
  },
  {
    name: '/nick',
    description: 'Change a user\'s nickname',
    usage: '/nick <user> <nick>',
    permissions: ['MANAGE_NICKNAMES']
  },
  {
    name: '/channel nuke',
    description: 'Delete and recreate a channel',
    usage: '/channel nuke',
    permissions: ['MANAGE_CHANNELS']
  },
  {
    name: '/purge all',
    description: 'Delete multiple messages',
    usage: '/purge all <amount>',
    permissions: ['MANAGE_MESSAGES']
  },
  {
    name: '/purge user',
    description: 'Delete messages from specific user',
    usage: '/purge user <user> <amount>',
    permissions: ['MANAGE_MESSAGES']
  },
  {
    name: '/role add',
    description: 'Add a role to a user',
    usage: '/role add <user> <role>',
    permissions: ['MANAGE_ROLES']
  },
  {
    name: '/role remove',
    description: 'Remove a role from a user',
    usage: '/role remove <user> <role>',
    permissions: ['MANAGE_ROLES']
  },
  {
    name: '/slowmode set',
    description: 'Set channel slowmode',
    usage: '/slowmode set <duration>',
    permissions: ['MANAGE_CHANNELS']
  },
  {
    name: '/timeout target',
    description: 'Timeout a user',
    usage: '/timeout <target> <duration> [reason]',
    permissions: ['MODERATE_MEMBERS']
  },
  {
    name: '/warn user',
    description: 'Warn a user',
    usage: '/warn <user> [reason]',
    permissions: ['MODERATE_MEMBERS']
  }
];