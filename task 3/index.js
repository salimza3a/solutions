const arr = [
  { type: "A", value: "Tesla" },
  { type: "A", value: "GMC" },
  { type: "B", value: "KIA" },
  { type: "C", value: "Dodge" },
  { type: "C", value: "Ford" },
];

function mergeArr(arr) {
  const obj = {};
  for (let i = 0; i < arr.length - 1; i++) {
    obj[arr[i].type] ??= { type: arr[i].type, value: [] };
    obj[arr[i].type].value.push(arr[i].value);
  }
  return obj;
}

const result = mergeArr(arr);
console.log(Object.values(result));
