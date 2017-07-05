/**
 ** @param {number[]} nums
 ** @param {number} target
 ** @return {number}
 *
 ** Given a sorted array and a target value, return the index if the target is found.
 ** If not, return the index where it would be if it were inserted in order.
 ** You may assume no duplicates in the array.
*/

const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) return i;
  }
  return nums.length;
};

/** tests */
let nums = [1, 3, 5, 6];
let target;
let result;

// 1
target = 5;
result = 2;
console.log(searchInsert(nums, target), 'should equal', result);

// 2
target = 2;
result = 1;
console.log(searchInsert(nums, target), 'should equal', result);

// 3
target = 7;
result = 4;
console.log(searchInsert(nums, target), 'should equal', result);

// 4
target = 0;
result = 0;
console.log(searchInsert(nums, target), 'should equal', result);

