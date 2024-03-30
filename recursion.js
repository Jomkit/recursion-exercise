/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1;

  return nums[0] * product(nums.splice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // Base case
  if(words.length === 1) return words[0].length;

  // normal case
  return words[0].length > longest(words.slice(1)) ? words[0].length : words[1].length;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length <= 2) return str[0];
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //base case
  if(str[0] != str[str.length - 1]) return false;
  if(str.length >=1) return true;

  str.pop();
  str.shift();
  return str;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

// function findIndex(arr, val) {
//   // Base case: either no val, or arr[i] == val
//   if(arr.length == 0) return -1;
//   // console.log(arr[arr.length-1])
//   if(arr[arr.length - 1] == val) return (arr.length - 1);
  
//   return findIndex(arr.slice(0, -1), val);
// }
function findIndex(arr, val, i=0) {
  // Base case: either no val, or arr[i] == val
  if(i >= arr.length) return -1;
  
  if(arr[i] == val) return i;
  
  return findIndex(arr, val, i += 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length === 1) return str[0];

  return str.slice(-1) + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for(let prop in obj){
    // Base case
    if(typeof(obj[prop]) == 'object') arr.push(...gatherStrings(obj[prop]));

    if(typeof(obj[prop]) == 'string') arr.push(obj[prop]);
  }
  return arr;
}
/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, l = 0, r = arr.length) {
  if(l>r) {
    return -1;
  }
  let mid = Math.floor( (r+l) / 2 );
  // console.log("mid", mid);
  if (arr[mid] === val) {
    return mid;
  }
  // mid greater than val, val is in left side of arr
  if (arr[mid] > val) {
    return binarySearch(arr, val, l, mid  - 1);
  }

  // else mid is less than val and val is in right side of arr
  return binarySearch(arr, val, mid + 1, r);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
