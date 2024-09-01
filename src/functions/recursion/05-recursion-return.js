function fetchWater(attempt = 0) {
  if (attempt === 5) return `Attempt time ${attempt} success.`;
  console.log(`Attempt time ${attempt} failed.`);
  return fetchWater(attempt + 1);
}
const result = fetchWater();
console.log(result);
