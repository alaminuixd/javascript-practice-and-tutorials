import * as fs from "fs";
// import * as cowsay from "cowsay";
import { say } from "cowsay";

import { think, SQUIRREL } from "cowsay";

const words = ["bload", "unicorn", "pisco", "footika", "mojo"];
const output = words.join("\n");
const cbF = () => {
  console.log("make the file");
};
fs.writeFile("one.txt", output, cbF);
const outputCow = say({ text: "mooo" });
console.log(outputCow);

/* const thinkOut = cowsay.think({
  text: "grazing in the browser",
  cow: SQUIRREL,
  eyes: "pp",
  tongue: ";;",
});
console.log(thinkOut); */

console.log(
  think({
    text: "grazing in the browser",
    cow: SQUIRREL,
    eyes: "pp",
    tongue: ";;",
  })
);
