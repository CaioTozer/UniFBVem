function setEventModalInputValues({ event }) {
  const inputTitle = document.getElementById('input-title')
  const inputDate = document.getElementById('input-date')
  const inputTime = document.getElementById('input-time')
  const inputPlace = document.getElementById('input-place')
  const inputDescription = document.getElementById('input-description')
  
  inputTitle.value = event.title
  inputDescription.value = event.obs
  inputPlace.value = event.local
  inputTime.value = event.time
  inputDate.value = event.day
}
