const buyModal = document.getElementById("buy-modal");
const buyModalTriggers = document.getElementsByClassName("buy-modal-trigger");
const buyModalCloseBtn = document.getElementsByClassName("close-buy-modal")[0];

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

for (trigger of buyModalTriggers) {
  trigger.onclick = function() {
    buyModal.style.display = "block";
  }
}

buyModalCloseBtn.onclick = function() {
  buyModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == buyModal) {
    buyModal.style.display = "none";
  }
}

