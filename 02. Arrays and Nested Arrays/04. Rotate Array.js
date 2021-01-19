function solve(arr, times) {
  for (let i = 0; i < times; i++) {
    arr.unshift(arr.pop());
  }

  return arr.join(" ");
}

// console.log(solve(["Banana", "Orange", "Coconut", "Apple"], 15));
