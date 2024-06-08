function printName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
  return `${firstName} ${lastName}`;
}

function printTime(n, value) {
  for (let i = 0; i < n; i++) {
    console.log(n);
  }
}

document.addEventListener("click", () => {
  console.log("clicked");
});

printName("Al Amin", "Khan");
printTime(5, "Hi");
