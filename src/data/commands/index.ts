// chmqp
import { CommandCategory } from '../../types/commands';
import { Shield, DollarSign, Gamepad, Gift, Image, Bot, Settings, Music, Wrench, Info, Sword, LifeBuoy } from 'lucide-react';
import { automodCommands } from './automod';
import { economyCommands } from './economy';
import { funCommands } from './fun';
import { giveawayCommands } from './giveaway';
import { imageCommands } from './image';
import { informationCommands } from './information';
import { moderationCommands } from './moderation';
import { musicCommands } from './music';
import { setupCommands } from './setup';
import { toolCommands } from './tools';
import { utilityCommands } from './utility';

export const commandCategories: CommandCategory[] = [
  {
    icon: Shield,
    name: "Automod",
    description: "Automatic moderation tools to keep your server safe",
    commands: automodCommands
  },
  {
    icon: DollarSign,
    name: "Economy",
    description: "Server economy and currency system",
    commands: economyCommands
  },
  {
    icon: Gamepad,
    name: "Fun",
    description: "Entertainment and interactive commands",
    commands: funCommands
  },
  {
    icon: Gift,
    name: "Giveaway",
    description: "Host and manage server giveaways",
    commands: giveawayCommands
  },
  {
    icon: Image,
    name: "Image",
    description: "Image manipulation and generation",
    commands: imageCommands
  },
  {
    icon: Info,
    name: "Information",
    description: "Bot and server information commands",
    commands: informationCommands
  },
  {
    icon: Sword,
    name: "Moderation",
    description: "Server moderation and management",
    commands: moderationCommands
  },
  {
    icon: Music,
    name: "Music",
    description: "Music playback and control",
    commands: musicCommands
  },
  {
    icon: Settings,
    name: "Setup",
    description: "Server configuration and setup",
    commands: setupCommands
  },
  {
    icon: Wrench,
    name: "Tools",
    description: "Utility tools and features",
    commands: toolCommands
  },
  {
    icon: LifeBuoy,
    name: "Utility",
    description: "General utility and helper commands",
    commands: utilityCommands
  }
];