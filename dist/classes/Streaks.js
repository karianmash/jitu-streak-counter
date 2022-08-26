import { CalculateDays } from "./CalculateDays.js";
import { RenderStreak } from "./RenderStreak.js";
export class Streaks {
    constructor() {
        this.streaks = [];
    }
    addStreak(taskName, taskImage, taskDate) {
        let days = CalculateDays.calculateNoOfDays(taskDate);
        let streak = {
            id: Date.now(),
            taskName,
            taskImage,
            taskDate,
            taskDays: days,
        };
        // Push to the array
        this.streaks.push(streak);
        // Get largest number of days
        let mostDays = Math.max(...this.streaks.map((streak) => streak.taskDays));
        // Get streak with most days
        this.streaks.forEach((streak) => {
            if (streak.taskDays == mostDays) {
                // alert(streak.taskDays)
                this.bestStreak = streak;
                // alert(this.bestStreak.taskDays);
            }
        });
        // Instantiate Reander class
        let renderStreak = new RenderStreak();
        // Render best streak
        renderStreak.renderBestStreak(this.bestStreak);
        // Render to DOM
        renderStreak.renderStreakDom(streak);
    }
    // Return best streak
    getBestStreak() {
        let mostDays = Math.max(...this.streaks.map((streak) => streak.taskDays));
        // Get streak with most days
        this.streaks.forEach((streak) => {
            if (streak.taskDays == mostDays) {
                this.bestStreak = streak;
            }
        });
        return this.bestStreak;
    }
    // Return streak
    getStreak(streakId) {
        var _a;
        (_a = this.streaks) === null || _a === void 0 ? void 0 : _a.forEach((streak) => {
            if (streak.id == streakId) {
                let renderStreak = new RenderStreak();
                renderStreak.renderStreakModal(streak);
            }
        });
    }
    // Return all streak
    getAllStreaks() {
        return this.streaks;
    }
    // delete streak
    deleteStreak(streakId) {
        var _a;
        (_a = this.streaks) === null || _a === void 0 ? void 0 : _a.forEach((streak) => {
            if (streak.id == streakId) {
                let streakIndex = this.streaks.indexOf(streak);
                this.streaks.splice(streakIndex, 1);
                // Instantiate Reander class
                let renderStreak = new RenderStreak();
                // Render best streak
                renderStreak.renderBestStreak(this.getBestStreak());
            }
        });
    }
}
