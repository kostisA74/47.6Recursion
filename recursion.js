/** product: calculate the product of an array of numbers. */

function product(nums) {
    if (nums.length === 0) return 1
    return nums[0]*product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, maxLength = 0) {
    if (words.length === 0) return maxLength
    if (words[0].length>=maxLength) {
        maxLength = words[0].length
    }
    return longest(words.slice(1), maxLength)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, out="") {
    if (str.length === 0) return out
    out += (str[0])
    i += 2
    return everyOther(str.slice(2), i, out)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
if (str.length>=2){
    if (str[0] !== str[str.length-1]){
        return false
    }
    return isPalindrome(str.slice(1,str.length-1))
}
return true
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
    if (arr[0] === val ){
        return i
    }
    if (arr.length === 0) return -1
    i += 1
    return findIndex(arr.slice(1),val, i)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, out="") {
    let output = out    
    if (str.length !== 0) {
      output = str.charAt(str.length-1)+revString(str.slice(0, str.length - 1),output)
    }
    return output 
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    const strings = []
      for (let key in obj){
        if (typeof obj[key] === "string"){
            strings.push(obj[key])
        }else if (typeof obj[key] === "object"){
           strings.push( ...gatherStrings(obj[key]))
        }
      }
    
    return strings
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start=0, end=arr.length-1) {
    if (start>end) return -1
    const mid = Math.floor((start+end)/2)
    let e, s
    if (val === arr[mid]){
      return mid
    }else if (val > arr[mid]){
        s = mid+1
    }else{
        e = mid-1
    }
    return binarySearch(arr, val, s, e)
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
