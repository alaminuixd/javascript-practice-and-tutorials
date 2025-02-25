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
  
  Now we go back up the recursion:
  return "" + "s" = "s"
  return "s" + "t" = "st"
  return "st" + "i" = "sti"
  */
