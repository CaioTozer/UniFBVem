const eventModal = document.getElementById("event-modal");
const eventModalTriggers = document.getElementsByClassName(
  "event-modal-trigger"
);
const eventModalCloseTriggers =
  document.getElementsByClassName("close-event-modal");
const inputTitle = document.getElementsByName("event-name")[0];
const inputDate = document.getElementsByName("event-date")[0];
const inputTime = document.getElementsByName("event-time")[0];
const inputPlace = document.getElementsByName("event-address")[0];
const inputDescription = document.getElementsByName("event-obs")[0];

for (trigger of eventModalTriggers) {
  trigger.onclick = function () {
    eventModal.style.display = "flex";
  };
}

for (closeTrigger of eventModalCloseTriggers) {
  closeTrigger.onclick = function () {
    eventModal.style.display = "none";
    inputTitle.value = "";
    inputDescription.value = "";
    inputPlace.value = "";
    inputTime.value = "";
    inputDate.value = "";
  };
}
