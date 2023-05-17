import axios from 'axios'

const form = document.querySelector('form')!
const addressInput = document.getElementById('address')! as HTMLInputElement
const GOOGLE_API_KEY = `AIzaSyBd09LIdN-j_0zkhJQyOan6Lrowe0RSHJs`

declare var google: any

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; log: number } } }[]
  status: 'OK' | 'ZERO_RESULTS'
}

function searchAddressFunction(event: Event) {
  event.preventDefault()

  const enteredAddress = addressInput.value

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      console.log(response)
      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch location')
      }

      const coordinates = response.data.results[0].geometry.location

      const map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 8
      })

      new google.maps.Marker({ position: coordinates, map })
    })
    .catch((err) => {
      alert(err.message)
      console.log(err)
    })
}

form.addEventListener('submit', searchAddressFunction)
