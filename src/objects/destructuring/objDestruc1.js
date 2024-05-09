const obj1 = {
  day: "Friday",
  month: "December",
  year: "2024",
};

const { d, m, y } = {
  d: obj1.day,
  m: obj1.month,
  y: obj1.year,
};

// directly destructure the object
const { day: d2, month: m2, year: y2 } = obj1;

// Destructuring in Function Parameters:
function displayDate({ day: d3, month: m3, year: y3 }) {
  console.log(`${d3}, ${m3} ${y3}`);
}

displayDate(obj1); // Output: Friday, December 2024

// Nested Destructuring:
const obj2 = {
  date: {
    day: "Friday",
    month: "December",
    year: "2024",
  },
};

const {
  date: { day: d4, month: m4, year: y4 },
} = obj2;

console.log(`${d4}, ${m4} ${y4}`); // Output: Friday, December 2024
