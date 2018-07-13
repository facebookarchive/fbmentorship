/**
 * Copyright (c) 2018-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * Raises base to the specified power [ranger]
 */

function power(base, exponent) {
  if (exponent == 0)
    return 1

  return base * power(base, exponent - 1)
}
module.exports = power;
