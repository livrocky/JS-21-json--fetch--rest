//sukurti random chuck norris juokeli kiekviena karta paspaudus mygtuka. Viska atvaizduoti html'e.
const btnEl = document.getElementById("btn1");
const h3El = document.getElementById("joke");
const base_url = "https://api.chucknorris.io/jokes";
//______//
fetch(`${base_url}/random`)
  .then((response) => response.json())
  .then((data) => {
    const joke = data.value;
    btnEl.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("jokeDisplay===", joke);
      const newH3El = document.createElement("h3");
      h3El.textContent = joke;
    });
  });
