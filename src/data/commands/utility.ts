// chmqp
import { Command } from '../../types/commands';

export const utilityCommands: Command[] = [
  {
    name: '/afk set',
    description: 'Set AFK status',
    usage: '/afk set [reason]'
  },
  {
    name: '/afk remove',
    description: 'Remove AFK status',
    usage: '/afk remove'
  },
  {
    name: '/backup create',
    description: 'Create server backup',
    usage: '/backup create',
    permissions: ['ADMINISTRATOR']
  },
  {
    name: '/backup list',
    description: 'List server backups',
    usage: '/backup list',
    permissions: ['ADMINISTRATOR']
  },
  {
    name: '/backup restore',
    description: 'Restore server backup',
    usage: '/backup restore <id>',
    permissions: ['ADMINISTRATOR']
  },
  {
    name: '/staff-help',
    description: 'Request staff assistance',
    usage: '/staff-help <issue>'
  },
  {
    name: '/poll create',
    description: 'Create a poll',
    usage: '/poll create <question> [options]'
  },
  {
    name: '/poll end',
    description: 'End an active poll',
    usage: '/poll end <poll-id>'
  },
  {
    name: '/poll view-votes',
    description: 'View poll results',
    usage: '/poll view-votes <poll-id>'
  },
  {
    name: '/webhook create',
    description: 'Create a webhook',
    usage: '/webhook create',
    permissions: ['MANAGE_WEBHOOKS']
  },
  {
    name: '/webhook edit',
    description: 'Edit a webhook',
    usage: '/webhook edit',
    permissions: ['MANAGE_WEBHOOKS']
  },
  {
    name: '/webhook delete',
    description: 'Delete a webhook',
    usage: '/webhook delete',
    permissions: ['MANAGE_WEBHOOKS']
  }
];