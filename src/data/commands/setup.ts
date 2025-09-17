// chmqp
import { Command } from '../../types/commands';

export const setupCommands: Command[] = [
  {
    name: '/ai-config configure',
    description: 'Configure AI settings',
    usage: '/ai-config configure',
    permissions: ['MANAGE_GUILD']
  },
  {
    name: '/ai-config blacklist',
    description: 'Manage AI blacklist',
    usage: '/ai-config blacklist',
    permissions: ['MANAGE_GUILD']
  },
  {
    name: '/ai-config disable',
    description: 'Disable AI features',
    usage: '/ai-config disable',
    permissions: ['MANAGE_GUILD']
  },
  {
    name: '/ai-config view',
    description: 'View AI settings',
    usage: '/ai-config view'
  },
  {
    name: '/anti-ghostping setup',
    description: 'Setup anti-ghostping',
    usage: '/anti-ghostping setup',
    permissions: ['MANAGE_GUILD']
  },
  {
    name: '/anti-ghostping disable',
    description: 'Disable anti-ghostping',
    usage: '/anti-ghostping disable',
    permissions: ['MANAGE_GUILD']
  },
  {
    name: '/anti-ghostping number-reset',
    description: 'Reset ghostping counter',
    usage: '/anti-ghostping number-reset',
    permissions: ['MANAGE_GUILD']
  },
  {
    name: '/welcome-message set',
    description: 'Configure welcome messages',
    usage: '/welcome-message set',
    permissions: ['MANAGE_GUILD']
  },
  {
    name: '/welcome-message remove',
    description: 'Remove welcome message',
    usage: '/welcome-message remove',
    permissions: ['MANAGE_GUILD']
  }
];