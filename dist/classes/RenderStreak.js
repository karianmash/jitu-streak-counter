import { bestStreak, activitySection, activityStatus, modal, } from "../util/htmlElements.js";
import { Events } from "./EventHandler.js";
export class RenderStreak {
    constructor() { }
    renderStreakDom(streak) {
        let event = new Events();
        let div = document.createElement("div");
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
    renderStreakModal(streak) {
        let event = new Events();
        // let days: number = CalculateDays.calculateNoOfDays(streak.taskDate);
        let daysString;
        if (streak.taskDays == 0 || streak.taskDays > 1) {
            daysString = "days ago";
        }
        else {
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
        let closeModal = document.querySelector(".close-modal");
        let deleteModal = document.querySelector(".delete-modal");
        closeModal.addEventListener("click", event.closeModalBtn);
        deleteModal.addEventListener("click", event.deleteStreakEventHandler);
    }
    // Render best streak
    renderBestStreak(streak) {
        let event = new Events();
        let div = document.createElement("div");
        div = `
      <h3>Best Streak</h3>
      <!-- First activity -->
      <div class="activity" id="${streak === null || streak === void 0 ? void 0 : streak.id}">
        <div class="image-wrapper">
          <!-- <ion-icon name="logo-no-smoking"></ion-icon> -->
          <img src="${streak === null || streak === void 0 ? void 0 : streak.taskImage}" alt="" />
        </div>
        <p class="date">${streak === null || streak === void 0 ? void 0 : streak.taskDate}</p>
        <p class="activity-name">${streak === null || streak === void 0 ? void 0 : streak.taskName}</p>
      </div>
    `;
        bestStreak.innerHTML = div;
        // get element after being inserted
        let bestActivity = document.querySelector(".activity");
        // Attach eventlistener to it
        bestActivity.addEventListener("click", event.displayModal);
    }
}
