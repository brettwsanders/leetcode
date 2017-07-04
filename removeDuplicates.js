/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = function(nums) {
  if (nums.length <= 1) return nums.length;
  let curr = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[curr] !== nums[i]) {
      nums[++curr] = nums[i];
    }
  }
  return curr + 1;
};


/** tests */
let testArr;

// 1
testArr = [1, 1, 2];
console.log(removeDuplicates(testArr), 'should equal 2');
console.log(testArr.length, 'should equal 3');

// 2
testArr = [1, 1, 1, 2];
console.log(removeDuplicates(testArr), 'should equal 2');
console.log(testArr.length, 'should equal 4');

// 3
testArr = [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 8];
console.log(removeDuplicates(testArr), 'should equal 8');
console.log(testArr.length, 'should equal 11');
