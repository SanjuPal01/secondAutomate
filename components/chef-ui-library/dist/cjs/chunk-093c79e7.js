'use strict';

const __chunk_3 = require('./chunk-6373e70b.js');

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!__chunk_3.isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (__chunk_3.isArrayLike(object) && __chunk_3.isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return __chunk_3.eq(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

exports.isIterateeCall = _isIterateeCall;
