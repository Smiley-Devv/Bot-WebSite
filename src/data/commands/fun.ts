// chmqp
import { Command } from '../../types/commands';

export const funCommands: Command[] = [
  {
    name: '/family marry',
    description: 'Marry another user',
    usage: '/family marry <user>'
  },
  {
    name: '/family divorce',
    description: 'Divorce your current partner',
    usage: '/family divorce'
  },
  {
    name: '/family relationships',
    description: 'View your relationships',
    usage: '/family relationships'
  },
  {
    name: '/fun pp-size',
    description: 'Check pp size (joke command)',
    usage: '/fun pp-size'
  },
  {
    name: '/fun advice',
    description: 'Get random advice',
    usage: '/fun advice'
  },
  {
    name: '/fun dice-roll',
    description: 'Roll a dice',
    usage: '/fun dice-roll'
  },
  {
    name: '/fun joke',
    description: 'Get a random joke',
    usage: '/fun joke'
  },
  {
    name: '/fun kiss',
    description: 'Kiss another user',
    usage: '/fun kiss <user>'
  },
  {
    name: '/fun coin-flip',
    description: 'Flip a coin',
    usage: '/fun coin-flip'
  },
  {
    name: '/fun slap',
    description: 'Slap another user',
    usage: '/fun slap <user>'
  },
  {
    name: '/hack target',
    description: 'Pretend to hack someone (joke command)',
    usage: '/hack <target>'
  },
  {
    name: '/membercount',
    description: 'Show server member count',
    usage: '/membercount'
  },
  {
    name: '/games-multiplayer game',
    description: 'Start a multiplayer game',
    usage: '/games-multiplayer <game> <user>'
  },
  {
    name: '/games-singleplayer game',
    description: 'Start a singleplayer game',
    usage: '/games-singleplayer <game>'
  }
];