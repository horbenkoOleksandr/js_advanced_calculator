'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(number) {
      this.result += number;

      return this;
    },
    subtract(number) {
      this.result -= number;

      return this;
    },
    multiply(number) {
      this.result *= number;

      return this;
    },
    divide(number) {
      this.result /= number;

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(fn, number) {
      this[fn.name](number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
