const handleDeleteEvent = (eventIndex) => {
  fetch('/events', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: events[eventIndex].title
    })
  }).then(() => location.reload())
}