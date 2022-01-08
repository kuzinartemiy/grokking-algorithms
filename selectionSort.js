function getSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  arr.forEach((element, index) => {
    if (element < smallest) {
      smallest = element;
      smallestIndex = index;
    }
  });

  return smallestIndex;
}

function selectionSort(arr) {
  const sortedArray = [];

  while(arr.length !== 0) {
    const smallestIndex = getSmallest(arr)
    sortedArray.push(arr[smallestIndex]);
    arr.splice(smallestIndex, 1);
  }
  
  return sortedArray;
}

console.log(selectionSort([5, 3, 6, 2, 10])); // [ 2, 3, 5, 6, 10 ]
console.log(selectionSort([23, 10, 73234, 1233214, 892, 2331, 1, 0])); // [ 0, 1, 10, 23, 892, 2331, 73234, 1233214 ]