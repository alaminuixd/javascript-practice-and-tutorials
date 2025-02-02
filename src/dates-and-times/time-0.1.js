// Now time long
function getTimeLong() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let period = now.getHours();

  if (period >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }

  if (hours === 0) {
    hours = 12;
  } else {
    hours = hours % 12;
  }

  if (hours.toString().length === 1) {
    hours = "0" + hours;
  }
  if (minutes.toString().length === 1) {
    minutes = "0" + minutes;
  }

  if (seconds.toString().length === 1) {
    seconds = "0" + seconds;
  }
  hours = hours;
  minutes = minutes;
  seconds = seconds;

  return `${hours}:${minutes}:${seconds} ${period}`;
}
getTimeLong();

// short
function getTimeShort() {
  const now = new Date();
  let hours = now.getHours() % 12 || 12; //
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let period = now.getHours() >= 12 ? "PM" : "AM";

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${period}`;
}
getTimeShort();

//shortest
function genCurDate() {
  const now = new Date();
  const fT = (n) => n.toString().padStart(2, "0");
  return `${fT(now.getHours() % 12 || 12)}:${fT(now.getMinutes())}:${fT(
    now.getSeconds()
  )} ${now.getHours() >= 12 ? "PM" : "AM"}`;
}

// shorest approach 2
//shortest
function genCurDate2() {
  const now = new Date();
  Number.prototype.fT = function () {
    return this.toString().padStart(2, "0");
  };
  return `${now.getHours().fT()}:${now.getMinutes().fT()}:${now
    .getSeconds()
    .fT()} ${now.getHours() >= 12 ? "PM" : "AM"}`;
}
genCurDate2();
