
document.addEventListener("DOMContentLoaded", () => {

  init();
});

function init() {

  let URL = 'https://randomuser.me/api/'
  let button = document.querySelector("#press")

  button.addEventListener("click", () => {

    document.querySelector('#fullname').innerHTML = "";
    document.querySelector('#email').innerHTML = "";
    document.querySelector('#phone').innerHTML = "";
    document.querySelector('#cell').innerHTML = "";
    document.querySelector('#date_of_birth').innerHTML = "";
    document.querySelector('#street').innerHTML = "";
    document.querySelector('#city').innerHTML = "";
    document.querySelector('#state').innerHTML = "";
    document.querySelector('#postcode').innerHTML = "";
    document.querySelector('#profile_picture').innerHTML = "";

    makeRequest(URL);
  })
}
