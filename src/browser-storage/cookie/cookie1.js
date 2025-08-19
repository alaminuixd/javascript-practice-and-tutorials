document.cookie = "username=alaminuixd";
document.cookie =
  'person={"name":"Al Amin"}; expires=Thu, 14 Aug 2025 11:23:00 GMT; path=/';

// Set expiry to today 5:19:59 PM local time
const expireDate = new Date();
expireDate.setHours(17, 19, 59); // 17:19:59 today

document.cookie = `student={"name":"Abrar Syed"}; expires=${expireDate.toUTCString()}; path=/`;

cookieStore
  .set(
    "user",
    JSON.stringify({ name: "Al Amin", username: "alaminuixd", pass: "@Khan" })
  )
  .then(() => {
    return cookieStore.get("user");
  })
  .then((usercookie) => {
    return JSON.parse(usercookie.value);
  })
  .then((user) => {
    const { name, username, pass } = user;
    console.log(`Name: ${name} Username: ${username} Password: ${pass}`);
  });

cookieStore
  .get("user")
  .then((cookiename) => JSON.parse(cookiename.value))
  .then((user) => console.log(user));
