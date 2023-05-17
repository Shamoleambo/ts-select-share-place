import axios from 'axios'

const form = document.querySelector("form")!
const addressInput = document.getElementById('address')! as HTMLInputElement
const GOOGLE_API_KEY = `AIzaSyBd09LIdN-j_0zkhJQyOan6Lrowe0RSHJs`

function searchAddressFunction(event: Event) {
  event.preventDefault()

  const addedAddress = addressInput.value

  
}

form.addEventListener("submit", searchAddressFunction);
