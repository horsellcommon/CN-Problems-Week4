/*
Write a function that takes 6 values (a,b,c,d,e,f) as arguments
Sum a and b
Then substract by c
Then multiply by d and divide by e
Finally raise to the power of f and return the result
Tip: mind the order
*/

const sixValues = (a, b, c, d, e, f) => {
  const sum = a+b
  const subtract = sum-c
  const multiply = subtract*d
  const divide = multiply/e
  const resultingSum = divide**f
  return resultingSum
};

sixValues();

const sixValuesImproved = (a, b, c, d, e, f) => {
  return (((a+b-c) * d) / e) ** f
}

module.exports = {
  sixValues,
  sixValuesImproved
};
