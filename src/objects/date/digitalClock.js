const container = document.createElement("div");
container.className = "container";
const clock = document.createElement("h1");
clock.className = "clock";
document.body.appendChild(container);
container.appendChild(clock);

// create clock
const tick = () => {
  const now = new Date();
  let h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  const html = `<span>${h}</span> : <span>${m}</span> : <span class="ampm">${s} ${ampm}</span>`;
  h = h % 12 || 12;

  clock.innerHTML = html;
};
setInterval(tick, 1000);
