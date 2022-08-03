import { Streak } from "./Streak";

export interface StreakClassInterface {
  addStreak(taskName: string, taskImage: string, taskDate: string): void;
  getBestStreak(): void;
  getStreak(arg0: number): void;
  getAllStreaks(): Streak[];
  deleteStreak(arg0: number): void;
}
