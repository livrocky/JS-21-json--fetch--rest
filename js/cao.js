//1. Jums paskambino pažinčių portalas – jiems reikia staigiai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ir juos atvaizduotų panašioje kortelėje kaip čia (dizainas neturi atitikti, bet padarykit tvarkingai - jį galite pilnai su HTML/CSS pasirašyti, bet norintiems sunkumo - pabandykite ir su JS):

const imgEl = document.querySelector("img");
const fullNameEl = document.getElementById("title");
const ageEl = document.getElementById("ageTitle");
const emailEl = document.getElementById("email");

fetch("https://randomuser.me/api")
  .then((response) => response.json())
  .then((data) => {
    let name = data.results[0].name.first;
    let lname = data.results[0].name.last;
    let age = data.results[0].dob.age;
    let email = data.results[0].email;
    let picture = data.results[0].picture.large;
    fullNameEl.textContent = `${name} ${lname} ${age} years old`;
    // ageEl.textContent = `${age} years old`;
    emailEl.textContent = email;
    imgEl.setAttribute("src", picture);
  });
