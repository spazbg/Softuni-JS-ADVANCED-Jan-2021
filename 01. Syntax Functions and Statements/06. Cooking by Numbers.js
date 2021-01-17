function slove(num, com1, com2, com3, com4, com5) {
    let number = Number.parseInt(num);
  
    const arr = [com1, com2, com3, com4, com5];
  
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case "chop":
          number /= 2;
          console.log(number);
          break;
        case "dice":
          number = Math.sqrt(number);
          console.log(number);
          break;
        case "spice":
          number++;
          console.log(number);
          break;
        case "bake":
          number *= 3;
          console.log(number);
          break;
        case "fillet":
          number -= 0.2 * number;
          console.log(number);
          break;
  
        default:
          break;
      }
    }
  }
  
  // console.log(slove('32', 'chop', 'chop', 'chop', 'chop', 'chop'));
  // console.log(slove("9", "dice", "spice", "chop", "bake", "fillet"));
  