export class CalculateDays {
    constructor() { }
    static calculateNoOfDays(taskDate) {
        let currentDate = new Date().getTime();
        let dayAdded = new Date(taskDate).getTime();
        let days = Math.floor((currentDate - dayAdded) / (1000 * 3600 * 24));
        if (days <= 0) {
            return days = 0;
        }
        return days;
    }
}
