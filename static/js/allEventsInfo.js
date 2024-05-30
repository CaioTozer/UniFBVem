const events = [
  {
    image: "../Assets/Palestra T.i.png",
    title: "Palestra semana da T.I",
    local: "Local: Auditório do mestrado",
    time: "19:00",
    day: "2024-02-01",
    obs: "Obs: Palestra para aresentação da área, sobre seus benefícios, desvantagens e desafios para concientização dos alunos.",
  },
  {
    image: "path/to/image1.jpg",
    title: "Evento 1",
    local: "Local 1",
    time: "12:00",
    day: "2024-02-01",
    obs: "Observações do Evento 1",
  },
  {
    image: "path/to/image2.jpg",
    title: "Evento 2",
    local: "Local 2",
    time: "15:00",
    day: "2024-02-01",
    obs: "Observações do Evento 2",
  },
];

function renderEvents(events) {
  const container = document.getElementById("events-container");

  events.forEach((event) => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event-modal-trigger");
    eventDiv.classList.add("event");
    const inputTitle = document.getElementById('input-title')
    const inputDate = document.getElementById('input-date')
    const inputTime = document.getElementById('input-time')
    const inputPlace = document.getElementById('input-place')
    const inputDescription = document.getElementById('input-description')

    eventDiv.onclick = function () {
      eventModal.style.display = "flex";
      inputTitle.value = event.title
      inputDescription.value = event.obs
      inputPlace.value = event.local
      inputTime.value = event.time
      inputDate.value = event.day

      
    }; 

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container-event");
    const eventImage = document.createElement("img");
    eventImage.classList.add("event-image");
    eventImage.src = event.image;
    imageContainer.appendChild(eventImage);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("event-info-container");

    const eventTitle = document.createElement("p");
    eventTitle.classList.add("event-title");
    eventTitle.textContent = event.title;

    const eventLocal = document.createElement("p");
    eventLocal.classList.add("info-event");
    eventLocal.textContent = event.local;

    const eventTime = document.createElement("p");
    eventTime.classList.add("info-event");
    eventTime.textContent = event.time;

    const eventDay = document.createElement("p");
    eventDay.classList.add("info-event");
    eventDay.textContent = event.day;

    const eventObs = document.createElement("p");
    eventObs.classList.add("captions");
    eventObs.textContent = event.obs;

    infoContainer.appendChild(eventTitle);
    infoContainer.appendChild(eventLocal);
    infoContainer.appendChild(eventTime);
    infoContainer.appendChild(eventDay);
    infoContainer.appendChild(eventObs);

    eventDiv.appendChild(imageContainer);
    eventDiv.appendChild(infoContainer);

    container.appendChild(eventDiv);
  });
}

renderEvents(events);
