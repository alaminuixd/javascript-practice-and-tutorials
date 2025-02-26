function revStr(val) {
  if (val === "") {
    return "";
  }
  return revStr(val.substring(1)) + val.charAt(0);
}

console.log(revStr("its"));

/*
  val is "its" not "" so, don't get in if block
  return revStr("its".substring(1)) -> "ts" + "its".charAt(0) -> waits to add "i"
  
  val is "ts" not "" so, don't get in if block
  return revStr("ts".substring(1)) -> "s" + "ts".charAt(0) -> waits to add "t"
  
  val is "s" not "" so, don't get in if block
  return revStr("s".substring(1)) -> "" + "s".charAt(0) -> waits to add "s"
  
  val is "" so, return ""
  
  Now we go back up the recursion (rewind):
  return "" + "s" = "s"
  return "s" + "t" = "st"
  return "st" + "i" = "sti"
  */

/* 
The return only happens during the rewind stage, when the recursion starts to unwind.

Here’s the breakdown:

During the recursion (call stack building), functions are called and added to the call stack. They do not return anything yet. They simply "wait" for the base case.

When the base case is reached (when val === ""), the function returns "", and that’s when the actual "return" starts happening as the call stack begins to unwind.

So, the return happens only during the unwinding process, as the functions are removed from the call stack (LIFO order).

!important: When funtions unwind from call stack their returned values get added right to left
Their values will be added like so:
1. "Al Amin"
2. "name is + Al Amin"
2. "My + name is + Al Amin"
check the following function in chrome to see this.
*/
function A() {
  return `My ${B()}`;
}
function B() {
  return `name is ${C()}`;
}
function C() {
  return `Al Amin.`;
}

console.log(A());
