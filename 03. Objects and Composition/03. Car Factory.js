function solution(input) {
  function getEngine(power) {
    const engines = [
      { power: 90, volume: 1800 },
      { power: 120, volume: 2400 },
      { power: 200, volume: 3500 },
    ].sort((a, b) => a.power - b.power); //сортираме за да сме сигурни, че двигателите са подреден малък към голям

    // let result;
    // for (let i = 0; i < engines.length; i++) {
    //   if (engines.power[i] >= power) {
    //       result = engines[i];
    //       break;
    //   }
    // }

    return engines.find((el) => el.power >= power); //find вместо горния for
  }

  function getWheels(size) {
    let wheel =
      Math.floor(size) % 2 === 0 ? Math.floor(size - 1) : Math.floor(size); //3.2 => 3; 3.2 е четно но ние трябва да върнем 2

    return [wheel, wheel, wheel, wheel];
  }

  return {
    model: input.model,
    engine: getEngine(input.power),
    carriage: {
      type: input.carriage,
      color: input.color,
    },
    wheels: getWheels(input.wheelsize),
  };
}

// console.log(
//   solution({
//     model: "VW Golf II",
//     power: 90,
//     color: "blue",
//     carriage: "hatchback",
//     wheelsize: 14,
//   })
// );
// console.log(
//   solution({
//     model: "Opel Vectra",
//     power: 110,
//     color: "grey",
//     carriage: "coupe",
//     wheelsize: 17,
//   })
// );
