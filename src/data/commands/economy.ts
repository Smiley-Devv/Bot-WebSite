// chmqp
import { Command } from '../../types/commands';

export const economyCommands: Command[] = [
  {
    name: '/balance',
    description: 'Check your current balance',
    usage: '/balance'
  },
  {
    name: '/bank deposit',
    description: 'Deposit money into your bank account',
    usage: '/bank deposit <amount>'
  },
  {
    name: '/bank withdraw',
    description: 'Withdraw money from your bank account',
    usage: '/bank withdraw <amount>'
  },
  {
    name: '/bank balance',
    description: 'Check your bank balance',
    usage: '/bank balance'
  },
  {
    name: '/beg',
    description: 'Beg for some coins',
    usage: '/beg'
  },
  {
    name: '/coinflip amount',
    description: 'Bet coins on a coinflip',
    usage: '/coinflip <amount>'
  },
  {
    name: '/coinflip side',
    description: 'Choose heads or tails',
    usage: '/coinflip <side>'
  },
  {
    name: '/daily',
    description: 'Claim your daily reward',
    usage: '/daily'
  },
  {
    name: '/delete-account',
    description: 'Delete your economy account',
    usage: '/delete-account'
  },
  {
    name: '/economy-admins addbalance',
    description: 'Add balance to a user',
    usage: '/economy-admins addbalance <user> <amount>',
    permissions: ['ADMINISTRATOR']
  },
  {
    name: '/economy-admins removebalance',
    description: 'Remove balance from a user',
    usage: '/economy-admins removebalance <user> <amount>',
    permissions: ['ADMINISTRATOR']
  },
  {
    name: '/give recipient',
    description: 'Give coins to another user',
    usage: '/give <recipient> <amount>'
  },
  {
    name: '/rob user',
    description: 'Attempt to rob another user',
    usage: '/rob <user>'
  },
  {
    name: '/slots coins',
    description: 'Play the slot machine',
    usage: '/slots <coins>'
  },
  {
    name: '/start',
    description: 'Start your economy account',
    usage: '/start'
  }
];