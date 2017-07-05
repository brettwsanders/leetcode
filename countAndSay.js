/**
 ** @param {number} n
 ** @return {string}
**/

const countAndSay = n => {
  if (n < 1) return null;
  const inner = (input, count) => {
    if (count === n) return input;
    let result = '';
    let prev;
    let mult = 0;
    for (let i = 0; i < input.length; i++) {
      if (!prev) {
        prev = input[i];
        mult++;
      } else if (prev !== input[i]) {
        result = result + mult + prev;
        prev = input[i];
        mult = 1;
      } else {
        mult++;
      }
    }
    if (mult) result = result + mult + prev;
    return inner(result, ++count);
  };
  return inner('1', 1);
};

/** tests */
let n;

// 1
n = 1;
console.log(countAndSay(n), 'should be 1');

// 2
n = 4;
console.log(countAndSay(n), 'should be 1211');
