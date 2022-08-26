import { addBtn, closeBtn, phoneImageSection, formSection, modal, formTaskDate, formTaskImage, formTaskName, errorMessage, } from "../util/htmlElements.js";
import { Streaks } from "./Streaks.js";
import { clearForm } from "../util/clearForm.js";
let streak = new Streaks();
export class Events {
    // Toggle add button
    toogleAddBtn() {
        addBtn.style.display = "none";
        closeBtn.style.display = "block";
        phoneImageSection.style.display = "none";
        formSection.style.display = "flex";
        return true;
    }
    // Toggle close button
    toogleCloseBtn() {
        addBtn.style.display = "block";
        closeBtn.style.display = "none";
        phoneImageSection.style.display = "flex";
        formSection.style.display = "none";
    }
    // Close modal
    closeModal(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // Close modal with button event
    closeModalBtn() {
        return (modal.style.display = "none");
    }
    // Validate form inputs
    validateFormInputs(e) {
        e.preventDefault();
        let task = {
            taskName: formTaskName.value,
            taskImage: formTaskImage.value,
            taskDate: formTaskDate.value,
        };
        if (!task.taskName || !task.taskImage || !task.taskDate) {
            errorMessage.style.display = "block";
            setTimeout(() => {
                errorMessage.style.display = "none";
            }, 5000);
            return false;
        }
        // let streak = new Streaks();
        streak.addStreak(task.taskName, task.taskImage, task.taskDate);
        clearForm();
    }
    // Display modal
    displayModal(e) {
        let activityId = e.currentTarget.id;
        streak.getStreak(activityId);
    }
    // delete activity
    deleteStreakEventHandler(e) {
        var _a;
        let activityId = e.currentTarget.parentElement.parentElement.id;
        e.currentTarget.parentElement.parentElement.parentElement.style.display =
            "none";
        streak.deleteStreak(activityId);
        (_a = document.getElementById(`${activityId}`)) === null || _a === void 0 ? void 0 : _a.remove();
    }
}
