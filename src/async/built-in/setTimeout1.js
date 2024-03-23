/* 
defination
*/
function stF(val) {
  console.log(val);
}
setTimeout(stF, 3000, "Hello world!");
// result: print after 3 seconds "Hello world!"

function handleTimeout() {
  console.log("Time is out!");
}
setTimeout(handleTimeout, 3000);
// result: print after 3 seconds "Tim is out!"
