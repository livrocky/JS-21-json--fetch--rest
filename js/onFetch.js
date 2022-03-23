//sukurti random chuck norris juokeli kiekviena karta paspaudus mygtuka. Viska atvaizduoti html'e.
const btnEl = document.getElementById("btn1");
// const h3El = document.getElementById("joke");
const base_url = "https://api.chucknorris.io/jokes";
//______//

btnEl.addEventListener("click", () => {
  fetch(`${base_url}/random`)
    .then((response) => response.json())
    .then((data) => {
      let joke = data.value;
      const h3El = document.createElement("h3");
      h3El.innerHTML += joke;
      document.body.append(h3El);
    });
});
