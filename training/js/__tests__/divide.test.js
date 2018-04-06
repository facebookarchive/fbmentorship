/**
 * Copyright (c) 2018-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const divide = require('../divide');

test('divide 12 / 4 to equal 3', () => {
  expect(divide(12, 4)).toBe(3);
});
