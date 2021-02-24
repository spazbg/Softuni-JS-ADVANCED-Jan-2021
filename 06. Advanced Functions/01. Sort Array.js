function solve(arr, type) {
  let input = arr;

  let orderType = {
    asc: (a, b) => a - b,
    desc: (a, b) => b - a,
  };

  return arr.sort(orderType[type]);
}

console.log(solve([14, 7, 17, 6, 8], "asc"));
console.log(solve([14, 7, 17, 6, 8], "desc"));
