// chmqp
import { Command } from '../../types/commands';

export const giveawayCommands: Command[] = [
  {
    name: '/giveaway start',
    description: 'Start a new giveaway',
    usage: '/giveaway start',
    permissions: ['MANAGE_GUILD']
  },
  {
    name: '/giveaway edit',
    description: 'Edit an existing giveaway',
    usage: '/giveaway edit',
    permissions: ['MANAGE_GUILD']
  },
  {
    name: '/giveaway end',
    description: 'End a giveaway early',
    usage: '/giveaway end',
    permissions: ['MANAGE_GUILD']
  },
  {
    name: '/giveaway reroll',
    description: 'Reroll a giveaway winner',
    usage: '/giveaway reroll',
    permissions: ['MANAGE_GUILD']
  }
];