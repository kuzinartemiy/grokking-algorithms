function countdown (i) {
  console.log(i);
  if (i <= 1) {
    return; // Base case
  } else {
    countdown(i - 1); // Recursive step
  }
}

function fact (i) {
  if (i === 1) {
    return 1; // Base case
  } else {
    return i * fact(i - 1); // Recursive step
  }
}

console.log(fact(5)); // 120
console.log(countdown(3)); // 3 2 1