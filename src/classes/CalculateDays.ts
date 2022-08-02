import { taskDate } from "../types/formInputs";
import { formTaskDate } from "../util/htmlElements";

export class CalculateDays {
  constructor() {}

  public static calculateNoOfDays(taskDate: taskDate) {
    let currentDate = new Date().getTime();

    let dayAdded = new Date(taskDate).getTime();

    let days: number = Math.floor((currentDate - dayAdded) / (1000 * 3600 * 24));


    if (days <= 0) {
      return days = 0;
    }
    return days;
  }
}
