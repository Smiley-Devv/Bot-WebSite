// chmqp
import { Command } from '../../types/commands';

export const musicCommands: Command[] = [
  {
    name: '/backward seconds',
    description: 'Rewind the current song',
    usage: '/backward <seconds>'
  },
  {
    name: '/clearqueue',
    description: 'Clear the music queue',
    usage: '/clearqueue'
  },
  {
    name: '/forward seconds',
    description: 'Fast forward the current song',
    usage: '/forward <seconds>'
  },
  {
    name: '/nowplaying',
    description: 'Show current song info',
    usage: '/nowplaying'
  },
  {
    name: '/pause',
    description: 'Pause the current song',
    usage: '/pause'
  },
  {
    name: '/play search',
    description: 'Play a song',
    usage: '/play <search>'
  },
  {
    name: '/queue',
    description: 'View the music queue',
    usage: '/queue'
  },
  {
    name: '/replay',
    description: 'Replay the current song',
    usage: '/replay'
  },
  {
    name: '/resume',
    description: 'Resume playback',
    usage: '/resume'
  },
  {
    name: '/shuffle',
    description: 'Shuffle the queue',
    usage: '/shuffle'
  },
  {
    name: '/skip',
    description: 'Skip the current song',
    usage: '/skip'
  },
  {
    name: '/stop',
    description: 'Stop playback and clear queue',
    usage: '/stop'
  },
  {
    name: '/volume volume',
    description: 'Adjust playback volume',
    usage: '/volume <volume>'
  }
];