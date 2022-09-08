const arr = [
  { type: "A", value: "Tesla" },
  { type: "A", value: "GMC" },
  { type: "B", value: "KIA" },
  { type: "C", value: "Dodge" },
  { type: "C", value: "Ford" },
];

function mergeArr(arr) {
  // using object key, value for comparing array'elements exist in obj or not
  //if it doesn't exist create new obj, add new type and push values which have same type;

  const obj = {};
  for (let i = 0; i < arr.length - 1; i++) {
    obj[arr[i].type] ??= { type: arr[i].type, value: [] };
    obj[arr[i].type].value.push(arr[i].value);
  }
  return obj;
}

const result = mergeArr(arr);
// return object values
console.log(Object.values(result));

// space comlexity O(n) because of creating object
// time complexity O(n) because of for loop
