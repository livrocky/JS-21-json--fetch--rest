const peopleObjs = [
  {
    name: "Arananas",
    surname: "Baras",
    age: 7,
    height: 110,
    weight: 40,
    sex: "male",
  },
  {
    name: "Ugne",
    surname: "Pugne",
    age: 17,
    height: 170,
    weight: 60,
    sex: "female",
  },
  {
    name: "Saulius",
    surname: "Bezda",
    age: 77,
    height: 165,
    weight: 90,
    sex: "male",
  },
  {
    name: "Kentas",
    surname: "Bentas",
    age: 27,
    height: 166,
    weight: 40,
    sex: "male",
  },
  {
    name: "Sauja",
    surname: "Mauja",
    age: 37,
    height: 165,
    weight: 55,
    sex: "female",
  },
  {
    name: "Nojus",
    surname: "Beda",
    age: 39,
    height: 184,
    weight: 92,
    sex: "male",
  },
  {
    name: "Laras",
    surname: "Makaule",
    age: 27,
    height: 192,
    weight: 88,
    sex: "male",
  },
  {
    name: "Fanta",
    surname: "Firtaite",
    age: 17,
    height: 168,
    weight: 75,
    sex: "female",
  },
];

const user1 = {
  name: "James",
  age: 45,
  hasCar: true,
  score: null,
};
const user2 = {
  name: "James",
  age: 45,
  hasCar: true,
  score: null,
};

//JSON
// JSON.stringify() paversti kintamaji i json formata

const ulJsonFormatu = JSON.stringify(user1);

console.log("user1===", user1);
console.log("ulJsonFormatu===", ulJsonFormatu);

// is Json verciam i JS objektus masyvus ir tt
//JSON.parse()

const u1BacktoJS = JSON.parse(ulJsonFormatu);
console.log(`ar user1 yra lygus u1BackToJs`, user1 === u1BacktoJS);

//______UZDUOTIS________//
//paverciam peopleObjs i json ir gauta json issaugom kaip people.json

//atsiversti atgal is json i js ir isitikinti kad veikia

const peopleJSformat = JSON.stringify(peopleObjs);
console.log("peopleObjs===", peopleJSformat);

const peopleBackToJS = JSON.parse(peopleJSformat);
console.log("peopleBackToJS===", peopleBackToJS);
