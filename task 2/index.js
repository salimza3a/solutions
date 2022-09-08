function findCommonPrefix(arr) {
  const size = arr.length;

  // if there is no value in array return "";

  if (size === 0) return "";

  //if there is one element in array return it;

  if (size === 1) return arr[0];

  // sort the array for finding min length string;

  arr.sort();

  let minLength = Math.min(arr[0].length, arr[size - 1].length);
  let i = 0;
  // looping through first and last string while checking i is less than minLength
  // if the comparing is true increment index for substringing string
  while (i < minLength && arr[0][i] == arr[size - 1][i]) i++;

  let prefix = arr[0].substring(0, i);

  console.log(prefix);
}

let input = ["alma", "almali", "albali"];

findCommonPrefix(input);
