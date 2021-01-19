function solve(arr) {
  let result = arr
    .sort((a, b) => a.localeCompare(b))
    .map((name, index) => {
      let resultNname = `${index + 1}.${arr[index]}`;
      return resultNname;
    });

  return result.join("\n");
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));
