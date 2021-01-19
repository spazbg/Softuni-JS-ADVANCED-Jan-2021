const solve = (arr, step) => {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i % step === 0) {
        result.push(arr[i]);
      }
    }
  
    return result;
  };
  
//   console.log(solve(["1", "2", "3", "4", "5"], 6));