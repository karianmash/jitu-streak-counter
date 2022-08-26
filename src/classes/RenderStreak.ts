import { Streak } from "../interfaces/Streak.js";
import {
  bestStreak,
  activitySection,
  activityStatus,
  modal,
} from "../util/htmlElements.js";
import { Events } from "./EventHandler.js";

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

    setTimeout(() => {
      activityStatus.style.backgroundColor = "";
      activityStatus.innerHTML = "Activities";
    }, 5000);

    activityStatus.style.backgroundColor = "rgb(150, 248, 215)";
    activityStatus.innerHTML = "Success!";
  }

  // Render to modal
  public renderStreakModal(streak: Streak) {
    let event = new Events();

    // let days: number = CalculateDays.calculateNoOfDays(streak.taskDate);

    let daysString: string;

    if (streak.taskDays == 0 || streak.taskDays > 1) {
      daysString = "days ago";
    } else {
      daysString = "day ago";
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
          <p class="time-passed">${streak.taskDays} ${daysString}</p>
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

    deleteModal.addEventListener("click", event.deleteStreakEventHandler);
  }

  // Render best streak
  public renderBestStreak(streak: Streak | undefined): void {
    let event = new Events();

    let div = document.createElement("div") as HTMLDivElement | any;

    div = `
      <h3>Best Streak</h3>
      <!-- First activity -->
      <div class="activity" id="${streak?.id}">
        <div class="image-wrapper">
          <!-- <ion-icon name="logo-no-smoking"></ion-icon> -->
          <img src="${streak?.taskImage}" alt="" />
        </div>
        <p class="date">${streak?.taskDate}</p>
        <p class="activity-name">${streak?.taskName}</p>
      </div>
    `;

    bestStreak.innerHTML = div;
    // get element after being inserted
    let bestActivity = document.querySelector(".activity") as HTMLDivElement;
    // Attach eventlistener to it
    bestActivity.addEventListener("click", event.displayModal);
  }
}
