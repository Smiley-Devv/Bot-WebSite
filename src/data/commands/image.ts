// chmqp
import { Command } from '../../types/commands';

export const imageCommands: Command[] = [
  {
    name: '/imagine',
    description: 'Generate an image using AI',
    usage: '/imagine <prompt> [model]',
    examples: ['/imagine a cute cat']
  },
  {
    name: '/images cat',
    description: 'Get a random cat image',
    usage: '/images cat'
  },
  {
    name: '/images dog',
    description: 'Get a random dog image',
    usage: '/images dog'
  },
  {
    name: '/images fake-tweet',
    description: 'Generate a fake tweet image',
    usage: '/images fake-tweet <text>'
  },
  {
    name: '/images fake-ytcomment',
    description: 'Generate a fake YouTube comment',
    usage: '/images fake-ytcomment <text>'
  },
  {
    name: '/images meme',
    description: 'Get a random meme',
    usage: '/images meme'
  },
  {
    name: '/images jail',
    description: 'Add jail bars to an image',
    usage: '/images jail [user]'
  },
  {
    name: '/images comrade',
    description: 'Add a communist filter to an image',
    usage: '/images comrade [user]'
  },
  {
    name: '/images gay',
    description: 'Add a rainbow filter to an image',
    usage: '/images gay [user]'
  },
  {
    name: '/images pixelate',
    description: 'Pixelate an image',
    usage: '/images pixelate [user]'
  },
  {
    name: '/images passed',
    description: 'Add a "mission passed" overlay',
    usage: '/images passed [user]'
  },
  {
    name: '/images wasted',
    description: 'Add a GTA "wasted" overlay',
    usage: '/images wasted [user]'
  },
  {
    name: '/images triggered',
    description: 'Create a triggered gif',
    usage: '/images triggered [user]'
  },
  {
    name: '/images circle-crop',
    description: 'Crop an image into a circle',
    usage: '/images circle-crop [user]'
  },
  {
    name: '/images glass',
    description: 'Add a glass overlay to an image',
    usage: '/images glass [user]'
  }
];