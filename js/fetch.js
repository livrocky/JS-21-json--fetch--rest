// fetch (adresas, {opciju objektas});
// response - spec atsakymo objektas su info apie uzklausa

fetch("people.json")
  .then((response) => {
    console.log(response);
    //paverciam gautus json duomenis i javascript
    return response.json();
  })
  .then((dataInJs) => {
    console.log("dataInJs===", dataInJs);
  })
  .catch((err) => console.warn(err));

fetch("main.txt")
  .then((response) => response.text())
  .then((data) => console.log(`data===`, data))
  .catch((err) => console.log(err));
