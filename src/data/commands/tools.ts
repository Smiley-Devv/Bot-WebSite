// chmqp
import { Command } from '../../types/commands';

export const toolCommands: Command[] = [
  {
    name: '/tools calculator',
    description: 'Perform calculations',
    usage: '/tools calculator <expression>'
  },
  {
    name: '/tools weather',
    description: 'Check weather information',
    usage: '/tools weather <location>'
  },
  {
    name: '/tools translate',
    description: 'Translate text between languages',
    usage: '/tools translate <text> <language>'
  },
  {
    name: '/tools password-generator',
    description: 'Generate a secure password',
    usage: '/tools password-generator'
  }
];