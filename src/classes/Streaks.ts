import { Streak } from "../interfaces/Streak.js";
import { taskDate, taskImage, taskName } from "../types/formInputs.js";
import { CalculateDays } from "./CalculateDays.js";
import { RenderStreak } from "./RenderStreak.js";

export class Streaks {
  private streaks: Streak[] = [];
  private bestStreak: Streak | undefined;

  constructor() {}

  public addStreak(
    taskName: taskName,
    taskImage: taskImage,
    taskDate: taskDate
  ): void {
    let days: number = CalculateDays.calculateNoOfDays(taskDate);

    let streak: Streak = {
      id: Date.now(),
      taskName,
      taskImage,
      taskDate,
      taskDays: days,
    };

    // Push to the array
    this.streaks.push(streak);

    // Get largest number of days
    let mostDays: number = Math.max(
      ...this.streaks.map((streak) => streak.taskDays)
    );

    // alert(mostDays)

    // Get streak with most days
    this.streaks.forEach((streak) => {
      if (streak.taskDays == mostDays) {
        // alert(streak.taskDays)
        this.bestStreak = streak;
        // alert(this.bestStreak.taskDays);
      }
    });

    let renderStreak = new RenderStreak();
    renderStreak.renderBestStreak(this.bestStreak);
    // Render to DOM
    renderStreak.renderStreakDom(streak);
    // Render best streak
    // renderStreak.renderBestStreak(this.bestStreak);
  }

  // Return streak
  public getStreak(streakId: number): void {
    this.streaks?.forEach((streak) => {
      if (streak.id == streakId) {
        let renderStreak = new RenderStreak();
        renderStreak.renderStreakModal(streak);
      }
    });
  }

  // Return all streak
  public getAllStreaks(): Streak[] {
    return this.streaks;
  }

  // delete streak
  public deleteStreak(streakId: number): void {
    this.streaks?.forEach((streak) => {
      if (streak.id == streakId) {
        let streakIndex = this.streaks.indexOf(streak);
        this.streaks.splice(streakIndex, 1);
      }
    });
  }
}
