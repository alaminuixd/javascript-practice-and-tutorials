import * as async1 from "./mods/async-0.1.js";
async function executeAsync(counter = 0) {
  if (counter > 5) return;
  await async1
    .one()
    .then(() => async1.two())
    .then(() => async1.three());
  counter++;
  executeAsync(counter);
}
executeAsync(1);
