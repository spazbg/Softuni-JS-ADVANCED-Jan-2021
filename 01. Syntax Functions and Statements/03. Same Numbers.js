function slove(number) {
    const numberAsString = number.toString();
    let isSame = true;
    let totalSum = 0;
  
    for (let index = 0; index < numberAsString.length; index++) {
      let current = Number(numberAsString[index]);
      let next = numberAsString[index + 1];
  
      if (
        numberAsString[index] !== numberAsString[index + 1] &&
        next !== undefined
      ) {
        isSame = false;
      }
  
      totalSum += current;
    }
  
    return `${isSame}\n${totalSum}`;
  }
  
  // console.log(slove(2222222));
  // console.log(slove(1234));
  