const eventModal = document.getElementById("event-modal");
const eventModalTriggers = document.getElementsByClassName("event-modal-trigger");
const eventModalCloseBtn = document.getElementsByClassName("close-event-modal")[0];

for (trigger of eventModalTriggers) {
  trigger.onclick = function() {
    eventModal.style.display = "flex";
  }
}

eventModalCloseBtn.onclick = function() {
  eventModal.style.display = "none";
}

