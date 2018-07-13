/**
 * Copyright (c) 2018-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const power = require('../power');

test('raises 2 to the power of 3 to equal 8', () => {
  expect(power(2, 3)).toBe(8);
});
