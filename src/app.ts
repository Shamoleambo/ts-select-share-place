const form = document.querySelector("form")!;
const addressInput = document.getElementById('address')! as HTMLInputElement

function searchAddressFunction(event: Event) {
  event.preventDefault()
  
  const addedAddress = addressInput.value
}

form.addEventListener("submit", searchAddressFunction);
