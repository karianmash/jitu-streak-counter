export let addBtn = document.getElementsByClassName(
  "add-btn"
)[0] as HTMLElement;
export let closeBtn = document.querySelector(".close-btn") as HTMLElement;
export let phoneImageSection = document.querySelector(
  ".main-area"
) as HTMLDivElement;
export let formSection = document.querySelector(
  ".form-section"
) as HTMLDivElement;
export let modal = document.querySelector(".modal") as HTMLElement;
// Error message
export let errorMessage = document.querySelector(
  ".error-message"
) as HTMLElement;
// Form inputs
export let formTaskName = document.getElementById(
  "task-name"
) as HTMLInputElement;
export let formTaskImage = document.getElementById(
  "task-image"
) as HTMLInputElement;
export let formTaskDate = document.getElementById(
  "task-date"
) as HTMLInputElement;
export let submitBtn = document.getElementById("submit-btn") as HTMLElement;
// Element to append streaks to
export let activitySection = document.querySelector(
  ".activity-section"
) as HTMLElement;
// Close/Delete modal
export let activityStatus = document.querySelector(
  ".activity-status"
) as HTMLDivElement;
// Element to append best streak to
export let bestStreak = document.querySelector(
  ".best-streaks"
) as HTMLDivElement;
