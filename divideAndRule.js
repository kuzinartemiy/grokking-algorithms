function sum (arr) {
  if (!arr.length) {
    return 0;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sum(arr.slice(1))
}

function count (arr) {
  if (!arr.length) {
    return 0;
  }
  if (arr.length === 1) {
    return 1;
  }
  return 1 + count(arr.slice(1))
}

function getGreatestNum (arr) {
  if (!arr.length) {
    return 0;
  }
  if (arr.length === 1) {
    return arr[0];
  }

  let greatest = arr[0];
  
  if (greatest < getGreatestNum(arr.slice(1))) {
    greatest = getGreatestNum(arr.slice(1))
  }

  return greatest;
}

console.log(sum([1, 2, 3, 4, 5, 6])); // 21
console.log(count([1, 2, 3, 4, 5, 6, 7])); // 7
console.log(getGreatestNum([1, 25, 3, 4, 11, 5, 6, 7])); // 25