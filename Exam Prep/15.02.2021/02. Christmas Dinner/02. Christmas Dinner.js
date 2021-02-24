class ChristmasDinner {
  constructor(budget) {
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  set budget(value) {
    if (value < 0) {
      throw Error("The budget cannot be a negative number");
    }
    this._budget = value;
  }

  get budget() {
    return this._budget;
  }

  shopping([product, price]) {
    if (price > this.budget) {
      throw new Error("Not enough money to buy this product");
    }

    this.budget -= price;
    this.products.push(product);

    return `You have successfully bought ${product}!`;
  }

  /**
   * @param {{ recipeName: string, productsList: Array<string> }} recipes
   */
  recipes({ recipeName, productsList }) {
    if (productsList.some((p) => this.products.includes(p) == false)) {
      throw new Error("We do not have this product");
    }

    this.dishes.push({ recipeName, productsList });
    return `${recipeName} has been successfully cooked!`;
  }

  inviteGuests(name, dish) {
    // console.log(Object.keys(this.dishes))

    //console.log(this.dishes.map((el) => el.recipeName).includes(dish));

    if (this.dishes.map((el) => el.recipeName).includes(dish) == false) {
      throw new Error("We do not have this dish");
    } else if (Object.keys(this.guests).includes(name) == true) {
      throw new Error("This guest has already been invited");
    }

    this.guests[name] = dish;

    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
         
    let result = [];
    let guests = Object.keys(this.guests);
    guests.forEach((name) =>
      result.push(
        `${name} will eat ${this.guests[name]}, which consists of ${this.dishes.find(d => d.recipeName == this.guests[name]).productsList.join(', ')}`
        //`${name} will eat ${this.guests[name]}, which consists of ${this.dishes["Oshav"]}`
      )
    );

    return result.join('\n');
  }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(["Salt", 1]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);

dinner.recipes({
  recipeName: "Oshav",
  productsList: ["Fruits", "Honey"],
});
dinner.recipes({
  recipeName: "Folded cabbage leaves filled with rice",
  productsList: ["Cabbage", "Rice", "Salt", "Savory"],
});
dinner.recipes({
  recipeName: "Peppers filled with beans",
  productsList: ["Beans", "Peppers", "Salt"],
});

dinner.inviteGuests("Ivan", "Oshav");
dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");

console.log(dinner.showAttendance());
