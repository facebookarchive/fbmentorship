const diff = require('../difference');

test('subracts 2 - 1 to equal 1', () => {
  expect(diff(2, 1)).toBe(1);
});
