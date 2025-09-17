// chmqp
import { Command } from '../../types/commands';

export const informationCommands: Command[] = [
  {
    name: '/bot suggest',
    description: 'Submit a suggestion for the bot',
    usage: '/bot suggest <suggestion>'
  },
  {
    name: '/bot info',
    description: 'Display bot information',
    usage: '/bot info'
  },
  {
    name: '/bot support',
    description: 'Get support server information',
    usage: '/bot support'
  },
  {
    name: '/bot uptime',
    description: 'Check bot uptime',
    usage: '/bot uptime'
  },
  {
    name: '/bot invite',
    description: 'Get bot invite link',
    usage: '/bot invite'
  },
  {
    name: '/bot ping',
    description: 'Check bot latency',
    usage: '/bot ping'
  },
  {
    name: '/bot changelogs',
    description: 'View recent changes',
    usage: '/bot changelogs'
  },
  {
    name: '/bot report-bug',
    description: 'Report a bug',
    usage: '/bot report-bug <description>'
  },
  {
    name: '/bot feedback',
    description: 'Submit feedback',
    usage: '/bot feedback <message>'
  },
  {
    name: '/help',
    description: 'Show command help',
    usage: '/help [command]'
  },
  {
    name: '/serverinfo',
    description: 'Display server information',
    usage: '/serverinfo'
  },
  {
    name: '/stats',
    description: 'Show bot statistics',
    usage: '/stats'
  },
  {
    name: '/userinfo',
    description: 'Display user information',
    usage: '/userinfo <user>'
  }
];