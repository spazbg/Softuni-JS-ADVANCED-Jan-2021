class Parking {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }

  addCar(carModel, carNumber) {
    if (this.capacity == this.vehicles.length) {
      throw new Error("Not enough parking space.");
    }

    this.vehicles.push({ carModel, carNumber, payed: false });

    return `The ${carModel}, with a registration number ${carNumber}, parked.`;
  }

  removeCar(carNumber) {
    if (this.vehicles.find((v) => v.carNumber == carNumber) == undefined) {
      throw new Error("The car, you're looking for, is not found.");
    }

    if (this.vehicles.find((v) => v.carNumber == carNumber).payed == false) {
      throw new Error(
        `${carNumber} needs to pay before leaving the parking lot.`
      );
    }

    let indexOfCar = this.vehicles.findIndex((v) => v.carNumber == carNumber);

    this.vehicles.splice(indexOfCar, 1);

    return `${carNumber} left the parking lot.`;
  }

  pay(carNumber) {
    if (this.vehicles.find((v) => v.carNumber == carNumber) == undefined) {
      throw new Error(`${carNumber} is not in the parking lot.`);
    }

    if (this.vehicles.find((v) => v.carNumber == carNumber).payed == true) {
      throw new Error(`${carNumber}'s driver has already payed his ticket.`);
    }

    let indexOfCar = this.vehicles.findIndex((v) => v.carNumber == carNumber);
    this.vehicles[indexOfCar].payed = true;

    return `${carNumber}'s driver successfully payed for his stay.`;
  }

  getStatistics(carNumber) {
    if (carNumber != undefined) {
      let car = this.vehicles.find((v) => v.carNumber == carNumber);
      return `${car.carModel} == ${car.carNumber} - ${
        car.payed ? "Has payed" : "Not payed"
      }`;
    }

    let result = [];
    result.push(
      `The Parking Lot has ${
        this.capacity - this.vehicles.length
      } empty spots left.`
    );
    this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
    this.vehicles.forEach((car) =>
      result.push(
        `${car.carModel} == ${car.carNumber} - ${
          car.payed ? "Has payed" : "Not payed"
        }`
      )
    );
    return result.join("\n");
  }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

