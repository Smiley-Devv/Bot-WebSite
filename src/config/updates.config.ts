// chmqp
import { Clock, Settings, Star, Zap } from 'lucide-react';

export interface UpdateChange {
  description: string;
  type: 'feature' | 'fix' | 'improvement' | 'security' | 'other';
}

export interface Update {
  version: string;
  date: string;
  title: string;
  description: string;
  icon: typeof Clock;
  changes: UpdateChange[];
  isHighlighted?: boolean;
}

export const createUpdate = (
  version: string,
  date: string,
  title: string,
  description: string,
  icon: typeof Clock,
  changes: UpdateChange[],
  isHighlighted: boolean = false
): Update => ({
  version,
  date,
  title,
  description,
  icon,
  changes,
  isHighlighted
});

export const createChange = (
  description: string,
  type: UpdateChange['type'] = 'feature'
): UpdateChange => ({
  description,
  type
});

// This are the icon colors: feature = blue, fix = green, improvement = purple, security = red, other = gray
export const updates: Update[] = [
  createUpdate(
    "1.0.0",
    "March 15, 2024",
    "Major Release",
    "Initial release with core features and functionality",
    Star,
    [
      createChange("Added core bot functionality", "feature"),
      createChange("Implemented basic commands", "feature"),
      createChange("Added user management system", "feature"),
      createChange("Added user management system", "feature"),
      createChange("Added user management system", "feature"),
      createChange("Set up basic moderation tools", "feature")
    ],
    true
  ),
  createUpdate(
    "0.9.0",
    "March 10, 2024",
    "Beta Release",
    "Final beta version before official release",
    Zap,
    [
      createChange("Fixed critical security issues", "security"),
      createChange("Improved command response time", "improvement"),
      createChange("Enhanced error handling", "improvement"),
      createChange("Updated documentation", "improvement")
    ]
  ),
  createUpdate(
    "0.8.0",
    "March 5, 2024",
    "Performance Update",
    "Focus on optimization and performance improvements",
    Settings,
    [
      createChange("Optimized database queries", "improvement"),
      createChange("Reduced memory usage", "improvement"),
      createChange("Fixed memory leaks", "fix"),
      createChange("Improved caching system", "improvement")
    ]
  )
];

export const addUpdate = (update: Update) => {
  updates.unshift(update);
};

export const getUpdates = () => updates;

export const getHighlightedUpdates = () => updates.filter(update => update.isHighlighted);

export const getLatestUpdate = () => updates[0];

export const getUpdateByVersion = (version: string) => 
  updates.find(update => update.version === version);

export const getUpdatesByType = (type: UpdateChange['type']) => 
  updates.filter(update => 
    update.changes.some(change => change.type === type)
  ); 