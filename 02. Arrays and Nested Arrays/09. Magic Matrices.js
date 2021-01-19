function solve(arr) {
  //Намираме сумите на всички редове
  let rowSums = arr.map((el) => el.reduce((a, b) => a + b));
  // for (let i = 0; i < arr.length; i++) {
  //     let row = arr[i];
  //     let sum = row.reduce((result, curr) => (result + curr), 0);
  //     rowSums.push(sum);
  // }

  //Намираме сумите на всички колони
  let colSums = arr[0]
    .map((_, col) => arr.map((row) => row[col]))
    .map((row) => row.reduce((a, b) => a + b));
  // for (let i = 0; i < arr.length; i++) {
  //     let newRow = []
  //     for (let y = 0; y < arr.length; y++) {
  //         newRow.push(arr[y][i])
  //     }

  //     let sum = newRow.reduce((result, curr) => (result + curr), 0);
  //     colSums.push(sum);
  // }

  //Събираме резултатите в един масив и проверяваме дали всички елементи са еднакви
  return rowSums.concat(colSums).every((el, i, arr) => el === arr[0]);

  // for (let i = 0; i < rowSums.length; i++) {
  //     if (rowSums[i] !== colSums[i] || rowSums[0] !== rowSums[i]) {
  //         return false;
  //     }
  // }

  //     return true;
}

console.log(
  solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
