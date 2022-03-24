//1. Jums paskambino pažinčių portalas – jiems reikia staigiai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ir juos atvaizduotų panašioje kortelėje kaip čia (dizainas neturi atitikti, bet padarykit tvarkingai - jį galite pilnai su HTML/CSS pasirašyti, bet norintiems sunkumo - pabandykite ir su JS):

const imgEl = document.querySelector("img");
const fullNameEl = document.getElementById("title");
const ageEl = document.querySelector(".ageTitle");
console.log("ageEl===", ageEl);
const emailEl = document.getElementById("email");

fetch("https://randomuser.me/api")
  .then((response) => response.json())
  .then((data) => {
    let name = data.results[0].name.first;
    let lname = data.results[0].name.last;
    let age = data.results[0].dob.age;
    let email = data.results[0].email;
    let picture = data.results[0].picture.large;
    fullNameEl.textContent = `${name} ${lname}`;
    ageEl.textContent = `${age} years old`;
    emailEl.textContent = email;
    imgEl.setAttribute("src", picture);
  });

// ${age} years old

//2. Naudojant "https://boiling-reaches-93648.herokuapp.com/week-3/party" - pasiimkite informaciją iš šito puslapio ir naudojant skirtingus array metodus, transformuokite duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika" yra VIP, ar ne?

fetch("https://boiling-reaches-93648.herokuapp.com/week-3/party")
  .then((response) => response.json())
  .then((data) => {
    const Kristupas = data.filter((uObj) => uObj.name === "Kristupas Lapeika");
    console.log(Kristupas);
    if (Kristupas[0].vip !== true) console.log(`${true}, Kristupas Lapeika yra VIP!`);
    else console.log(`${false}, Kristupas Lapeika nėra VIP!`);
  });

//3. Organizuojate vestuves - pasiimkite informaciją iš "https://boiling-reaches-93648.herokuapp.com/week-3/wedding" ir atvaizduokite lentelėje: vardą, plusOne ir attending. Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-".

fetch("https://boiling-reaches-93648.herokuapp.com/week-3/wedding")
  .then((response) => response.json())
  .then((data) => {
    const list = data.map((o) => ({ name: o.name, plusOne: o.plusOne, attending: o.attending }));
    console.table(list);
  });
