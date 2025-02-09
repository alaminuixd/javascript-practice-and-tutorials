function recur(n) {
  if (n > 0) {
    console.log(n);
    recur(--n);
  }
}
recur(5);

function recur(n) {
  if (n > 0) {
    console.log(n);
    recur(--n);
  }
}
recur(5);

// you can not use pre increment here as it's value get change later
function r1(val = 0) {
  if (val < 20) {
    console.log(val);
    r1(val++); // Error will occure
  }
}
r1(10);
// use increment
function r1(val = 0) {
  if (val < 20) {
    console.log(val);
    r1(++val); // Error will occure
  }
}
r1(10);
