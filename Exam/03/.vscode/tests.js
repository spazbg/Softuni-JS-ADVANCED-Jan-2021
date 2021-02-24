const { describe } = require("mocha");
const { assert } = require("chai");

const numberOperations = {
  powNumber: function (num) {
    return num * num;
  },

  numberChecker: function (input) {
    input = Number(input);

    if (isNaN(input)) {
      throw new Error("The input is not a number!");
    }

    if (input < 100) {
      return "The number is lower than 100!";
    } else {
      return "The number is greater or equal to 100!";
    }
  },


  sumArrays: function (array1, array2) {
    const longerArr = array1.length > array2.length ? array1 : array2;
    const rounds =
      array1.length < array2.length ? array1.length : array2.length;

    const resultArr = [];

    for (let i = 0; i < rounds; i++) {
      resultArr.push(array1[i] + array2[i]);
    }

    resultArr.push(...longerArr.slice(rounds));

    return resultArr;
  },
};

describe("tests", () => {
  describe("powNumber", () => {
    it("Power", () => {
        assert.equal(numberOperations.powNumber(2), 4)
    });
  });

  describe("numberChecker", () => {
 
    it("Its NaN", () => {
        assert.throw( () => numberOperations.numberChecker("string"), "The input is not a number!")
    });

    it("its number below 100", () => {
        assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!')
    });

    it("its 100", () => {
        assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
    });

    it("its more than 100", () => {
        assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!')
    });  
  });

  describe("sumArrays", () => {
    it("sum arrays", () => {
        assert.deepEqual(numberOperations.sumArrays([0, 1, 2, 3], [3, 2, 1, 0]), [3, 3, 3, 3])
    });

    it("sum arrays2", () => {
        assert.deepEqual(numberOperations.sumArrays([0, 1, 2], [3, 2, 1, 0]), [3, 3, 3, 0])
    });

    it("sum arrays3", () => {
        assert.deepEqual(numberOperations.sumArrays([0, 1, 2, 3], [3, 2, 1]), [3, 3, 3, 3])
    });
  });
});
