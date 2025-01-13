let num = 10;
function dispatch(actiontype) {
  const action = {
    inc: num + 10,
    dec: num - 1,
  };
  return action[actiontype] || num;
}
console.log(dispatch());
