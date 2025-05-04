const userForm = document.getElementById("userForm");
const personName = document.getElementById("person-name");

// 1. Load name from localStorage on page load
const showNameFromStorage = () => {
  const userData = localStorage.getItem("user");
  if (userData) {
    const { firstName, lastName } = JSON.parse(userData);
    personName.innerHTML = `My Name is: ${firstName} ${lastName}`;
  }
};
showNameFromStorage();

// 2. Update localStorage and DOM on form submit
const processSubmit = (e) => {
  e.preventDefault();
  /*   const firstNameInput = document.getElementById("fName");
  const lastNameInput = document.getElementById("lName"); */
  //const inputArray2 = Array.from(e.target);
  //"e.target.element" is the best practice.
  const inputArray = Array.from(e.target.elements);
  const [firstNameInput, lastNameInput] = inputArray;
  const personObj = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
  };

  localStorage.setItem("user", JSON.stringify(personObj));
  personName.innerHTML = `My Name is: ${personObj.firstName} ${personObj.lastName}`;
};

userForm.addEventListener("submit", processSubmit);
