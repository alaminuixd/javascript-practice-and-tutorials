function fetchWater(attempt = 0) {
  if (attempt === 5) return `Attempt time ${attempt} success.`;
  console.log(`Attempt time ${attempt} failed.`);
  return fetchWater(attempt + 1);
}
const result = fetchWater();
console.log(result);

// res
function parent() {
  let num = 0; // Initialize `num` to 0
  function inner() {
    if (num >= 10) return num; // Base case: when num reaches 10, return num and stop recursion
    num++; // Increment `num` by 1
    return inner(); // Recursively call inner until base case is met
  }
  // Start the recursion by invoking `inner` and return its result
  return inner(); // When the recursion finishes, the final value of `num` is returned
}

console.log(parent()); // Output: 10
