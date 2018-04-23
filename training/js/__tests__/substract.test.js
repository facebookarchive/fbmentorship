/**
 * Copyright (c) 2018-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 
const substract = require('../substract');

test('adds 3 - 1 to equal 2', () => {
  expect(substract(3, 1)).toBe(2);
});
