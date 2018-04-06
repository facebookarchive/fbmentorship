/**
 * Copyright (c) 2018-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const divide = require('../divide');

test('divides 4 / 2 to equal 2', () => {
  expect(divide(4, 2)).toBe(2);
});
