function solve(...input) {

  let result = [];
  input.forEach((el) => result.push({ [typeof el]: `${el}` }));
  result.forEach((e) =>
    console.log(`${Object.getOwnPropertyNames(e)[0]}: ${e[Object.getOwnPropertyNames(e)[0]]}`));

  let counts = {};
  result.forEach(
    (el) => (counts[Object.keys(el)[0]] = 1 + (counts[Object.keys(el)[0]] || 0))
  );

  var sortable = [];
for (var prop in counts) {
    sortable.push([prop, counts[prop]]);
}

sortable.sort((a, b) => b[1] - a[1]);
sortable.forEach(el => console.log(`${el[0]} = ${el[1]}`))

}

solve("cat", 42, function () {console.log("Hello world!");});
solve({ name: 'bob'}, 3.333, 9.999);
