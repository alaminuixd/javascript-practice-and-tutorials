const oldTime = new Date("September 10 2023 7:30: 15");
const newTime = new Date();
const diff = newTime.getTime() - oldTime.getTime();
const minutes = Math.round(diff / 1000 / 60);
const hours = Math.round(minutes / 60);
const days = Math.round(hours / 24);
console.log(`The blog was created ${days} days ago`);
//The toUTCString() converts a Date object into a string, representing the date in the UTC (Coordinated Universal Time) format.
const UTC = new Date();
console.log(UTC.toUTCString());
// we can convert a timestamp to an actual date using it inside a new Date() constructor
const timestamp = 1726683962990;
console.log(new Date(timestamp));
