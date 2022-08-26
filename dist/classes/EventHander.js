import { addBtn, closeBtn, phoneImageSection, formSection, modal, formTaskDate, formTaskImage, formTaskName, errorMessage } from "../util/htmlElements";
import { Streaks } from "./Streaks";
import { clearForm } from "../util/clearForm";
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
        let streak = new Streaks();
        streak.addStreak(task.taskName, task.taskImage, task.taskDate);
        clearForm();
    }
}
