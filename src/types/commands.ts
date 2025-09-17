// chmqp
import { LucideIcon } from 'lucide-react';

export interface Command {
  name: string;
  description: string;
  usage: string;
  permissions?: string[];
  examples?: string[];
}

export interface CommandCategory {
  icon: LucideIcon;
  name: string;
  description: string;
  commands: Command[];
}