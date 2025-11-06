// https://archive.jestjs.io/docs/en/22.x/getting-started

const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract 1 - 2 to equal -1', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});


test('divide 1 / 2 to equal 0.5', () => {
  expect(calculator.division(1, 2)).toBe(0.5);
});


test('multiply 4 * 5 to equal 20', () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});