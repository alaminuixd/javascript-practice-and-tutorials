const now = new Date();
console.log(now);
const objDate = {
  day: now.getDay() + 1,
  month: now.getMonth() + 1,
  year: now.getFullYear(),
  date: now.getDate(),
  hours: now.getHours(),
  minutes: now.getMinutes(),
  seconds: now.getSeconds(),
};

const { day, date, month, year, hours, minutes, seconds } = objDate;
console.log(
  `Day: ${day} | Date: ${date} | Month: ${month} | Year ${year} | Hour: ${hours} | Minute: ${minutes} | Seconds: ${seconds}`
);

// timestamp
console.log("Timestamp: " + now.getTime());

// date string
console.log("Date: " + now.toDateString());
// time string
console.log("Time: " + now.toTimeString());
// local string
console.log("Local date & time: " + now.toLocaleString());
// local time string
console.log("Local time: " + now.toLocaleTimeString());
// local date string
console.log("Local date: " + now.toLocaleDateString());
