'use strict';

const __chunk_3 = require('./chunk-6373e70b.js');

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return __chunk_3.setToString(__chunk_3.overRest(func, start, __chunk_3.identity), func + '');
}

var _baseRest = baseRest;

exports.baseRest = _baseRest;
