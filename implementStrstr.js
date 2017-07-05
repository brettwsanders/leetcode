/**
 ** @param {string} haystack
 ** @param {string} needle
 ** @return {number}

 ** Returns the index of the first occurrence of needle in haystack,
 ** or -1 if needle is not part of haystack.
*/

const strStr = function(haystack, needle) {
  if (!needle) return 0;
  const len = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, len+i) === needle) {
      return i;
    }
  }
  return -1;
};

/** tests */
let haystack;
let needle;

// 1
haystack = 'the gunslinger';
needle = 'sling';
console.log(strStr(haystack, needle), 'should be 7');

// 2
haystack = 'the drawing of the three';
needle = 'the';
console.log(strStr(haystack, needle), 'should be 0');
