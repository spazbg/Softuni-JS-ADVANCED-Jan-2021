function solve(arr) {
    arr.sort((a, b) => {
      if (a.length === b.length) {
        return a.localeCompare(b);
      }
  
      return a.length - b.length;
    });
  
    return arr.join("\n");
  }
  
  // console.log(solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]));
  // console.log(solve(["alpha", "beta", "gamma"]));