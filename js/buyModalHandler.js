const modal = document.getElementById("buy-modal");
const modalTriggers = document.getElementsByClassName("buy-modal-trigger");
const modalCloseBtn = document.getElementsByClassName("close-modal")[0];

const ticketPriceInput = document.getElementById("ticket-price-input");
const ticketTypeSelect = document.getElementById("ticket-type");

const ticketPrices = {
  standart: 80,
  premium: 100,
  vip: 150,
}

ticketTypeSelect.addEventListener('change', () => {
  const price = ticketPrices[ticketTypeSelect.value]
  const formatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  ticketPriceInput.value = price ? formatter.format(price) : '';
})

for (trigger of modalTriggers) {
  console.log(trigger)
  trigger.onclick = function() {
    modal.style.display = "block";
  }
}

modalCloseBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

