function solve(arr, sortOrder) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }
  const sorters = {
    destination: (a, b) => a.destination.localeCompare(b.destination),
    price: (a, b) => a.price - b.price,
    status: (a, b) => a.status.localeCompare(b.status),
  };
  let resultArr = arr
    .map((x) => new Ticket(...x.split("|")))
    .sort(sorters[sortOrder]);
  return resultArr;
}
