import { Streak } from "../interfaces/Streak.js";
import { activitySection, activityStatus, modal } from "../util/htmlElements.js";
import { Events } from "./EventHandler.js";
import { CalculateDays } from "./CalculateDays.js";

export class RenderStreak {
  constructor() {}

  public renderStreakDom(streak: Streak) {
    let event = new Events();

    let div = document.createElement("div") as HTMLDivElement | any;
    div.className = "activity";
    div.setAttribute("id", `${streak.id}`);
    // Attach eventlistener
    div.addEventListener("click", event.displayModal);

    div.innerHTML = `
            <div class="image-wrapper">
                <!-- <ion-icon name="logo-no-smoking"></ion-icon> -->
                <img src="${streak.taskImage}" alt="">
            </div>
            <p class="date">${streak.taskDate}</p>
            <p class="activity-name">${streak.taskName}</p>
        `;

    activitySection.appendChild(div);
    activityStatus.innerHTML = "Activities";
  }

  // Render to modal
  public renderStreakModal(streak: Streak) {
    let event = new Events();
    
    let days: number;
    let daysString: string;

    if(CalculateDays.calculateNoOfDays(streak.taskDate) <= 0) {
      days = 0;
      daysString = "days"
    } else if (CalculateDays.calculateNoOfDays(streak.taskDate) > 1) {
      days = CalculateDays.calculateNoOfDays(streak.taskDate);
      daysString = "days";
    } else {
      days = CalculateDays.calculateNoOfDays(streak.taskDate);
      daysString = "day";
    }

    modal.innerHTML = `
      <div class="activities-container" id="${streak.id}">
        <!-- Activity -->
        <div class="activity">
          <!-- <ion-icon name="logo-no-smoking"></ion-icon> -->
          <div class="modal-image">
            <img
              src="${streak.taskImage}"
              alt=""
            />
          </div>
          <p class="date">${streak.taskDate}</p>
          <p class="activity-name">${streak.taskName}</p>
          <p class="time-passed">${days} ${daysString}</p>
        </div>
        <!-- Close/delete activity -->
        <div class="close-delete-btn">

          <div class="btn close-modal">Close</div>
          <div class="btn delete-modal">Delete</div>
        </div>
      </div>
    `;

    modal.style.display = "flex";

    let closeModal = document.querySelector(".close-modal") as HTMLDivElement;

    let deleteModal = document.querySelector(".delete-modal") as HTMLDivElement;

    closeModal.addEventListener("click", event.closeModalBtn);

    deleteModal.addEventListener("click", event.deleteStreak);
  }
}
