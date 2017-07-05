/**
 *  * @param {number[]} nums
 *   * @param {number} val
 *    * @return {number}
 */

const removeElement = function(nums, val) {
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
     if (nums[i] !== val) {
       nums[curr++] = nums[i];
     }
  }
  return curr;
};

/** tests */
let nums;
let val;

// 1
nums = [2, 3, 2, 3];
val = 3;
console.log(removeElement(nums, val), 'should be 2');

// 2
nums = [3, 3, 2, 3];
val = 3;
console.log(removeElement(nums, val), 'should be 1');

// 3
nums = [3, 1, 1, 1, 3, 2, 2, 3];
val = 3;
console.log(removeElement(nums, val), 'should be 5');
