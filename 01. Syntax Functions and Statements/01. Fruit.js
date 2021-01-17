function slove(fruit, weight, price) {
    const weightInKg = weight / 1000;
    const totalPrice = price * weightInKg;
  
    return `I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`;
  }

//   console.log(slove("orange", 2500, 1.8));
//   console.log(slove("apple", 1563, 2.35));