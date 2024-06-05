const eventModal = document.getElementById("event-modal");
const eventModalTitle = document.getElementsByClassName("event-modal-title")[0];
const eventModalCloseTriggers =
  document.getElementsByClassName("close-event-modal");

const eventForm = document.getElementsByClassName("event-modal-form")[0];

const inputTitle = document.getElementsByName("event-name")[0];
const inputDate = document.getElementsByName("event-date")[0];
const inputTime = document.getElementsByName("event-time")[0];
const inputPlace = document.getElementsByName("event-address")[0];
const inputDescription = document.getElementsByName("event-obs")[0];

let isEditing = false

const handleCloseModal = () => {
  eventModal.style.display = "none";
  inputTitle.value = "";
  inputDescription.value = "";
  inputPlace.value = "";
  inputTime.value = "";
  inputDate.value = "";
};

const handleOpenEventModal = (eventIndex) => {  
  isEditing = eventIndex !== undefined

  eventModal.style.display = "flex";

  if (isEditing) {
    const event = events[eventIndex]

    inputTitle.disabled = true
    eventModalTitle.innerHTML = "Editando evento"

    inputTitle.value = event.title
    inputDate.value = event.date
    inputTime.value = event.time
    inputPlace.value = event.local
    inputDescription.value = event.obs
  } else {
    inputTitle.disabled = false
    eventModalTitle.innerHTML = "Criar um novo evento"
  }
}

const handleSubmitForm = (event) => {
  event.preventDefault()

  const body = {
    name: inputTitle.value,
    date: inputDate.value,
    time: inputTime.value,
    address: inputPlace.value,
    description: inputDescription.value,
  }

  fetch('/events', {
    method: isEditing ? 'PUT' : 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(() => {
    location.reload()
    handleCloseModal()
  })
}

eventForm.addEventListener('submit', handleSubmitForm)

for (closeTrigger of eventModalCloseTriggers) {
  closeTrigger.onclick = handleCloseModal
}
