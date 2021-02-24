class Bank {
  constructor(bankName) {
    this._bankName = bankName;
    this.allCustomers = [];
  }

  newCustomer(customer) {
    let newCus = customer;
    if (
      this.allCustomers.find((oldCus) => oldCus.personalId === newCus.personalId)
    ) {
      throw new Error(
        `${newCus.firstName} ${newCus.lastName} is already our customer!`
      );
    }
    newCus.history = [];
    this.allCustomers.push(newCus);
    let resultCus = Object.assign({}, newCus)
    delete resultCus.history
    return resultCus;
  }

  depositMoney(id, amount) {
    if (
        this.allCustomers.find((oldCus) => oldCus.personalId === id) ==
      undefined
    ) {
      throw new Error("We have no customer with this ID!");
    }

    let curCust = this.allCustomers.find(
      (c) => c.personalId === id
    );
  

    if (curCust.hasOwnProperty("totalMoney")) {
      curCust.totalMoney += amount;
    } else {
      curCust.totalMoney = amount;
    }


    curCust.history.push(
      `${curCust.firstName} ${curCust.lastName} made deposit of ${amount}$!`
    );

    return `${curCust.totalMoney}$`;
    //`${this.allCustomers.filter(c => c.personalId == personalId)[totalMoney]}$`
  }

  withdrawMoney(id, amount) {
    if (
      this.allCustomers.find((oldCus) => (oldCus.personalId === id)) ==
      undefined
    ) {
      throw new Error("We have no customer with this ID!");
    }

    let curCust = this.allCustomers.find(
      (c) => c.personalId === id
    );


    if (amount > curCust.totalMoney) {
      throw new Error(
        `${curCust.firstName} ${curCust.lastName} does not have enough money to withdraw that amount!`
      );
    }

   
    curCust.totalMoney -= amount;
    curCust.history.push(
        `${curCust.firstName} ${curCust.lastName} withdrew ${amount}$!`
      );
    return `${curCust.totalMoney}$`;
  }

  customerInfo(id) {
    if (
      this.allCustomers.find((oldCus) => (oldCus.personalId = id)) ==
      undefined
    ) {
      throw new Error("We have no customer with this ID!");
    }

    let curCust = this.allCustomers.find(
      (c) => c.personalId == id
    );

    let result = [];
    result.push(`Bank name: ${this._bankName}`);
    result.push(`Customer name: ${curCust.firstName} ${curCust.lastName}`);
    result.push(`Customer ID: ${curCust.personalId}`);
    result.push(`Total Money: ${curCust.totalMoney}$`);
    result.push(`Transactions:`);

    let result2 = []
    for (let i = 1; i <= curCust.history.length; i++) {
        result2.push(`${i}. ${curCust.history[i-1]}`);        
    }
    result2.reverse()

    let final = result.concat(result2)

    return final.join("\n");
  }
}

let bank = new Bank("SoftUni Bank");

console.log(
  bank.newCustomer({
    firstName: "Svetlin",
    lastName: "Nakov",
    personalId: 6233267,
  })
);
console.log(
  bank.newCustomer({
    firstName: "Mihaela",
    lastName: "Mileva",
    personalId: 4151596,
  })
);

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

