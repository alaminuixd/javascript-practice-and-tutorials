// Take out the maximum number from the parameter value wheather it's an array or numbers
function test(...nums) {
  let max = -Infinity;
  if (Array.isArray(nums[0])) {
    nums = nums[0];
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}
const resWithArr = test([5, 2, 8, 4]); // Works with array input
const resWithNum = test(9, 3, 1, 4); // Works with multiple numbers
