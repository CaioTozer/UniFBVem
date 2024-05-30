const eventModal = document.getElementById("event-modal");
const eventModalTriggers = document.getElementsByClassName(
  "event-modal-trigger"
);
const eventModalCloseBtn =
  document.getElementsByClassName("close-event-modal")[0];
const inputTitle = document.getElementById("input-title");
const inputDate = document.getElementById("input-date");
const inputTime = document.getElementById("input-time");
const inputPlace = document.getElementById("input-place");
const inputDescription = document.getElementById("input-description");

for (trigger of eventModalTriggers) {
  trigger.onclick = function () {
    eventModal.style.display = "flex";
  };
}

eventModalCloseBtn.onclick = function () {
  eventModal.style.display = "none";
  inputTitle.value = "";
  inputDescription.value = "";
  inputPlace.value = "";
  inputTime.value = "";
  inputDate.value = "";
};
