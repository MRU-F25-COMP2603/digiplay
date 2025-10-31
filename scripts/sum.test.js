// https://archive.jestjs.io/docs/en/22.x/getting-started

const calculator = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test('adds -1 to -1 to equal -2', () => {
  expect(calculator.sum(-1, -1)).toBe(-2);
})