export async function one() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("one");
      resolve();
    }, 1000);
  });
}
export async function two() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("two");
      resolve();
    }, 1000);
  });
}
export async function three() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("three");
      resolve();
    }, 1000);
  });
}
