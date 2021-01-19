function solve(arr) {
  let result = [];

  for (const el of arr) {
    if (el >= result[result.length - 1] || result.length === 0) {
      result.push(el);
    }
  }

  return result;
}

//   console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
//   console.log(solve([20, 3, 2, 15, 6, 1]));
