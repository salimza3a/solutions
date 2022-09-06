function isPalindrome(arg) {
  //  convert argument to string for using number as well
  // change whole string to lower case for making every string lower case
  const strValue = `${arg}`.toLowerCase();

  let strLength = strValue.length;
  // compare first and last characther of string for checking whether equal or not
  for (let i = 0; i < strLength / 2; i++) {
    if (strValue[i] != strValue[strLength - i - 1]) {
      // start to checking first and last character to make sure a palindrome
      return false;
    }
  }
  // is the whole string is palindrome return true
  return true;
}

const result = isPalindrome("Step on no pets");

console.log(result);

// time complexity --> O(n/2) = O(n);
// space complexity --> O(1)
