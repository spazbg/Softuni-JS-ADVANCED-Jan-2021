function slove(input) {
  const regex = /\w+/g;

  let result = input.match(regex);

  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].toUpperCase();
  }

  console.log(result.join(", "));
}

// console.log(slove('Hi, how are you?'));
