//"https://jsonplaceholder.typicode.com/users"
const BASE_URL = "https://jsonplaceholder.typicode.com/";
const result = fetch(`${BASE_URL}/users/1`);
result
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fetch(`${BASE_URL}/users/1`)
  .then((res) => console.log(res))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
