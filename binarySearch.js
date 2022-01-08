function binarySearch(arr, element) {
  let low = 0;
  let hight = arr.length - 1;

  while(low <= hight) {
    let mid = Math.floor((low + hight) / 2);
    let guess = arr[mid];

    if (guess === element) return mid;

    if (guess > element) hight = mid - 1;
    if (guess < element) low = mid + 1;
  }
  return null;
}

const my_list = [1, 3, 5, 7, 9]

console.log(binarySearch(my_list, 3)); // 1
console.log(binarySearch(my_list, 10)); // null
console.log(binarySearch(my_list, 7)); // 3
