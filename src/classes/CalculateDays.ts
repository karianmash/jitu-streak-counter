import { taskDate } from "../types/formInputs";

export class CalculateDays {
  constructor() {}

  public static calculateNoOfDays(taskDate: taskDate): number {
    let currentDate: number = new Date().getTime();

    let dayAdded: number = new Date(taskDate).getTime();

    let days: number = Math.floor((currentDate - dayAdded) / (1000 * 3600 * 24));


    if (days <= 0) {
      return days = 0;
    }
    return days;
  }
}
