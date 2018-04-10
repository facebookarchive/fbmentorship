/*
Writing test case for subtract 2 numbers.
*/
const subtract = require('../subtract');

test('subtracts 2 - 1 to equal 1', () => {
  expect(subtract(2, 1)).toBe(1);
});
