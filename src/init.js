
function cleanData(json) {

  const fullname = `${json.results[0].name.title.charAt(0).toUpperCase() + json.results[0].name.title.substr(1)} ${json.results[0].name.first.charAt(0).toUpperCase() + json.results[0].name.first.substr(1)} ${json.results[0].name.last.charAt(0).toUpperCase() + json.results[0].name.last.substr(1)}`
  const email = `${json.results[0].email}`
  const phone = `${json.results[0].phone}`
  const cell = `${json.results[0].cell}`
  const dob = `${json.results[0].dob.date}`
  const street = `${json.results[0].location.street}`
  const city = `${json.results[0].location.city}`
  const state = `${json.results[0].location.state}`
  const postcode = `${json.results[0].location.postcode}`
  const picture = `${json.results[0].picture.medium}`

  document.querySelector('#fullname').innerText += fullname
  document.querySelector('#email').innerText += email
  document.querySelector('#phone').innerText += phone
  document.querySelector('#cell').innerText += cell
  document.querySelector('#date_of_birth').innerText += dob
  document.querySelector('#street').innerText += street
  document.querySelector('#city').innerText += city
  document.querySelector('#state').innerText += state
  document.querySelector('#postcode').innerText += postcode
  document.querySelector('#profile_picture').src = picture

}

function makeRequest(URL) {
  fetch(URL)
    .then( res => res.json() )
    .then( json => cleanData(json))

}
