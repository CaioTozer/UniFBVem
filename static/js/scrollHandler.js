document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("atractions");
    const infoContainer = document.getElementById("infoContainer");

    scrollButton.addEventListener("click", function(event) {
        event.preventDefault(); 
        infoContainer.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("eventsButtonNavbar");
    const allEventsContainer = document.getElementById("allEventsContainer");

    scrollButton.addEventListener("click", function(event) {
        event.preventDefault(); 
        allEventsContainer.scrollIntoView({ behavior: 'smooth' });
    });
});