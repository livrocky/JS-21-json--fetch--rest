const base_url = "https://jsonplaceholder.typicode.com";

//parsiusti ir isconsolinti 100 postu is :  https://jsonplaceholder.typicode.com/posts

console.time("fetch");
fetch(`${base_url}/posts`)
  .then((response) => response.json())
  .then((data) => console.log("posts", data))
  .catch((error) => console.log(`error===`, error.message));

console.log("after fetch");

// get 50 comments

fetch(`${base_url}/comments`)
  .then((response) => response.json())
  .then((data) => console.log("comments", data.slice(0 - 50)))
  .catch((error) => console.log(error.message));

// get all users

fetch(`${base_url}/users`)
  .then((response) => response.json())
  .then((data) => console.log("users", data))
  .catch((error) => console.log(error));

//get all commenst of 5 posts

//BUTINAI PASIBAIGTI!!//

// fetch(`${base_url}/comments`)
//   .then((response) => response.json())
//   .then((data) =>

//// get all users usernames in an array

fetch(`${base_url}/users`)
  .then((response) => response.json())
  .then((data) => {
    console.log(`data===`, data);
    const usernameArray = data.map((uObj) => uObj.username);
    console.log("usernameArray===", usernameArray);
  })
  .catch((error) => console.log(error));

// get all users cities in an array

fetch(`${base_url}/users`)
  .then((response) => response.json())
  .then((data) => {
    console.log(`data===`, data);
    const cityArray = data.map((uObj) => uObj.address.city);
    console.log("cityArray===", cityArray);
  })
  .catch((error) => console.log(error));
