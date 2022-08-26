import { CalculateDays } from "../classes/CalculateDays";
export let days;
export let daysString;
if (CalculateDays.calculateNoOfDays(streak.taskDate) <= 0) {
    days = 0;
    daysString = "days";
}
else if (CalculateDays.calculateNoOfDays(streak.taskDate) > 1) {
    days = CalculateDays.calculateNoOfDays(streak.taskDate);
    daysString = "days";
}
else {
    days = CalculateDays.calculateNoOfDays(streak.taskDate);
    daysString = "day";
}
