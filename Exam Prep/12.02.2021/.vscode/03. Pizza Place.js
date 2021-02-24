const { describe } = require("mocha");
const { assert } = require("chai");

let pizzUni = {
  makeAnOrder: function (obj) {
    if (!obj.orderedPizza) {
      throw new Error("You must order at least 1 Pizza to finish the order.");
    } else {
      let result = `You just ordered ${obj.orderedPizza}`;
      if (obj.orderedDrink) {
        result += ` and ${obj.orderedDrink}.`;
      }
      return result;
    }
  },

  getRemainingWork: function (statusArr) {
    const remainingArr = statusArr.filter((s) => s.status != "ready");

    if (remainingArr.length > 0) {
      let pizzaNames = remainingArr.map((p) => p.pizzaName).join(", ");
      let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`;

      return pizzasLeft;
    } else {
      return "All orders are complete!";
    }
  },

  orderType: function (totalSum, typeOfOrder) {
    if (typeOfOrder === "Carry Out") {
      totalSum -= totalSum * 0.1;

      return totalSum;
    } else if (typeOfOrder === "Delivery") {
      return totalSum;
    }
  },
};

describe("tests", () => {
  describe("makeAnOrder", () => {
    it("order only pizza", () => {
      assert.equal(
        pizzUni.makeAnOrder({ orderedPizza: "Americana Hot" }),
        "You just ordered Americana Hot"
      );
    });

    it("order pizza and drink", () => {
      assert.equal(
        pizzUni.makeAnOrder({
          orderedPizza: "Americana Hot",
          orderedDrink: "coca cola",
        }),
        "You just ordered Americana Hot and coca cola."
      );
    });

    it("order no pizza", () => {
      assert.throw(
        () => pizzUni.makeAnOrder({}),
        "You must order at least 1 Pizza to finish the order."
      );
    });
  });

  describe("getRemainingWork", () => {
    it("no pending pizzas", () => {
        assert.equal(pizzUni.getRemainingWork([{pizzaName: 'Margarite', status: 'ready'}]), "All orders are complete!")
    });

    it("no pending pizzas", () => {
        assert.equal(pizzUni.getRemainingWork([{pizzaName: 'Margarite', status: 'ready'}, {pizzaName: 'Peperoni', status: 'preparing'}]), "The following pizzas are still preparing: Peperoni.")
    });
  });

  describe("orderType", () => {

    it("Carry Out", () => {
        assert.equal(pizzUni.orderType(50, 'Carry Out'), 45)
    });

    it('Delivery', () => {
        assert.equal(pizzUni.orderType(50, 'Delivery'), 50)
    });

  });

});
