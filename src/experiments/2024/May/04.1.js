// one parameter in callback
function greetCustomer(cb, fName, lName, greet) {
  // `${fName} ${lName}` in cb() in one parameter
  const fullName = cb(`${fName} ${lName}`);
  let details = `${fullName} ${greet}`;
  return details;
}
function cbF(message) {
  //* message === `${fName} ${lName}` which is one parameter
  return message;
}
console.log(greetCustomer(cbF, "Al Almin", "Khan", "Welcome"));

// multi paramenter in callback
function greetCustomer2(cb, fName, lName, greet) {
  // fName, lName in cb() in two parameters
  const fullName = cb(fName, lName);
  let details = `${fullName} ${greet}`;
  return details;
}
function cbF2(fName, lName) {
  // fName, lName are two parameters that points to cb(fName, lName)
  return `${fName} ${lName}`;
}
console.log(greetCustomer2(cbF2, "Al Almin", "Khan", "Welcome"));
