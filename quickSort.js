function quickSort (arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[0];

  const less = [];
  const greater = [];
  arr.slice(1).forEach(element => element < pivot ? less.push(element) : greater.push(element));

  return quickSort(less).concat(pivot, quickSort(greater));
}

console.log(quickSort([10, 5, 2, 1])) // [1, 2, 5, 10]