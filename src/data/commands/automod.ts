// chmqp
import { Command } from '../../types/commands';

export const automodCommands: Command[] = [
  {
    name: '/automod flagged-words',
    description: 'Configure auto-moderation for flagged words',
    usage: '/automod flagged-words',
    permissions: ['MODERATE_MEMBERS']
  },
  {
    name: '/automod mention-spam',
    description: 'Set up protection against mention spam',
    usage: '/automod mention-spam',
    permissions: ['MODERATE_MEMBERS']
  },
  {
    name: '/automod keyword',
    description: 'Add or remove keywords for auto-moderation',
    usage: '/automod keyword',
    permissions: ['MODERATE_MEMBERS']
  }
];