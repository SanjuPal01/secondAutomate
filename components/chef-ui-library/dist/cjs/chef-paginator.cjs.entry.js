'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');
require('./chunk-f5b13333.js');
const __chunk_3 = require('./chunk-6373e70b.js');
const __chunk_4 = require('./chunk-e974d361.js');
const __chunk_9 = require('./chunk-0c47841c.js');
const __chunk_10 = require('./chunk-093c79e7.js');
const __chunk_11 = require('./chunk-83673ec1.js');
const __chunk_15 = require('./chunk-8450f3a1.js');
const __chunk_16 = require('./chunk-c19092fb.js');
const __chunk_17 = require('./chunk-7e615057.js');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

var _baseRange = baseRange;

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && __chunk_10.isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = __chunk_3.toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = __chunk_3.toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : __chunk_3.toFinite(step);
    return _baseRange(start, end, step, fromRight);
  };
}

var _createRange = createRange;

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = _createRange();

var range_1 = range;

var func = __chunk_3.convert('range', range_1);

func.placeholder = __chunk_3.require$$1;
var range$1 = func;

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : __chunk_3.toInteger(n);
  return __chunk_9.baseSlice(array, 0, n < 0 ? 0 : n);
}

var take_1 = take;

var func$1 = __chunk_3.convert('take', take_1);

func$1.placeholder = __chunk_3.require$$1;
var take$1 = func$1;

/**
 * Creates a slice of `array` with `n` elements taken from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.takeRight([1, 2, 3]);
 * // => [3]
 *
 * _.takeRight([1, 2, 3], 2);
 * // => [2, 3]
 *
 * _.takeRight([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.takeRight([1, 2, 3], 0);
 * // => []
 */
function takeRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : __chunk_3.toInteger(n);
  n = length - n;
  return __chunk_9.baseSlice(array, n < 0 ? 0 : n, length);
}

var takeRight_1 = takeRight;

var func$2 = __chunk_3.convert('takeRight', takeRight_1);

func$2.placeholder = __chunk_3.require$$1;
var takeRight$1 = func$2;

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

var _arrayIncludesWith = arrayIncludesWith;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? _arrayIncludesWith : __chunk_3.arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = __chunk_3.arrayMap(array, __chunk_3.baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new __chunk_3.SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? __chunk_3.cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? __chunk_3.cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

var _baseIntersection = baseIntersection;

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return __chunk_17.isArrayLikeObject(value) ? value : [];
}

var _castArrayLikeObject = castArrayLikeObject;

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = __chunk_16.baseRest(function(arrays) {
  var mapped = __chunk_3.arrayMap(arrays, _castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? _baseIntersection(mapped)
    : [];
});

var intersection_1 = intersection;

var func$3 = __chunk_3.convert('intersection', intersection_1);

func$3.placeholder = __chunk_3.require$$1;
var intersection$1 = func$3;

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (__chunk_3.isObjectLike(value) && __chunk_3.baseGetTag(value) == numberTag);
}

var isNumber_1 = isNumber;

var func$4 = __chunk_3.convert('isNumber', isNumber_1, __chunk_11.require$$1);

func$4.placeholder = __chunk_3.require$$1;
var isNumber$1 = func$4;

/**
 * @description
 * Adds pagination. The paginator functions by adding a query string in the form of 'page=<page number>' to the current pages url. To implement just subscribe to url changes and update your view accordingly. Anything passed as a child to the paginator will be rendered beside the paginator.
 *
 * @example
 * <chef-paginator page-count='20' current-page='5'>
 * </chef-paginator>
 *
 * @example
 * <chef-paginator page-count='20' current-page='5'>
 *   Some text to render with my fancy paginator
 * </chef-paginator>
 *
 * @example
 * <chef-paginator page-count='20' current-page='5'>
 *   <strong>Maybe something bolder?</strong>
 * </chef-paginator>
 *
 * @example
 * <div style='height: 2000px'>
 *   <chef-scrollfader>
 *     <chef-paginator style='position: fixed; top: 50%; left: 40%;' page-count='20' current-page='5'>
 *       In combo with the chef-scrollfader.
 *     </chef-paginator>
 *   </chef-scrollfader>
 * </div>
 */
class ChefPaginator {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * The total number of pages to show in the paginator
         */
        this.pageCount = '1';
        /**
         * The current page to highlight. This is the param that you will update on a page change.
         */
        this.currentPage = '1';
    }
    render() {
        // Angular always passes a string as the property type.
        // We don't want strings, we want numbers, so here we
        // convert the string to a number and pass those values
        // around.
        const currentPage = parseInt(this.currentPage, 10);
        const pageCount = parseInt(this.pageCount, 10);
        return (__chunk_1.h("div", { class: "paginator" }, __chunk_1.h("div", { class: "text" }, __chunk_1.h("slot", null)), __chunk_1.h("div", { class: "controls" }, this.controlsLeft(currentPage), this.pageLinks(currentPage, pageCount), this.controlsRight(currentPage, pageCount))));
    }
    controlsLeft(currentPage) {
        return (__chunk_1.h("div", { class: "left" }, this.linkTo(this.firstPage(), __chunk_1.h("chef-icon", null, "arrow_back")), this.linkTo(this.prevPage(currentPage), __chunk_1.h("chef-icon", null, "keyboard_arrow_left"))));
    }
    controlsRight(currentPage, pageCount) {
        return (__chunk_1.h("div", { class: "right" }, this.linkTo(this.nextPage(currentPage, pageCount), __chunk_1.h("chef-icon", null, "keyboard_arrow_right")), this.linkTo(this.lastPage(pageCount), __chunk_1.h("chef-icon", null, "arrow_forward"))));
    }
    pageLinks(currentPage, pageCount) {
        const pageLink = (cp) => (i) => {
            const active = i === parseInt(cp, 10);
            return isNumber$1(i) ? this.linkTo(this.pageHref(i), i, active) : '...';
        };
        const pageNums = this.pageNums(currentPage, pageCount);
        const pageLabels = pageNums.map(num => num.toString());
        if (pageNums[0] !== 1) {
            pageLabels[0] = '...';
        }
        if (pageNums[pageNums.length - 1] !== pageCount) {
            pageLabels[pageNums.length - 1] = '...';
        }
        return (__chunk_1.h("div", { class: "pages" }, __chunk_4.map(pageLink(currentPage))(pageLabels)));
    }
    pageNums(currentPage, pageCount) {
        const itemsToShow = 7;
        const start = __chunk_15.clamp(0, pageCount)(currentPage - 4);
        const end = __chunk_15.clamp(0, pageCount)(start + itemsToShow);
        const fullList = range$1(1, pageCount + 1);
        const firstHalf = take$1(end)(fullList);
        const lastHalf = takeRight$1(pageCount - (end - itemsToShow))(fullList);
        return intersection$1(firstHalf, lastHalf);
    }
    firstPage() {
        return this.pageHref(1);
    }
    prevPage(currentPage) {
        const pageNum = currentPage > 1 ? currentPage - 1 : currentPage;
        return this.pageHref(pageNum);
    }
    lastPage(pageCount) {
        return this.pageHref(pageCount);
    }
    nextPage(currentPage, pageCount) {
        const pageNum = currentPage < pageCount ? currentPage + 1 : pageCount;
        return this.pageHref(pageNum);
    }
    pageHref(pageNum) {
        const [url, paramString] = document.location.href.split('?');
        const params = new URLSearchParams(paramString);
        params.set('page', pageNum.toString());
        return `${url}?${params}`;
    }
    navigateTo(event) {
        event.preventDefault();
        window.history.pushState({}, '', event.currentTarget.href);
        const popStateEvent = new PopStateEvent('popstate', null);
        dispatchEvent(popStateEvent);
        event.currentTarget.blur();
    }
    linkTo(href, content, active = false) {
        return __chunk_1.h("a", { class: active ? 'active' : '', onClick: this.navigateTo, href: href }, content);
    }
    static get style() { return "chef-paginator{font-family:var(--font-family);pointer-events:none}chef-paginator .paginator{pointer-events:auto;max-width:572px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background-color:var(--chef-primary-bright);padding:.5em;-webkit-box-shadow:0 0 48px 0 rgba(63,83,100,.2);box-shadow:0 0 48px 0 rgba(63,83,100,.2);border-radius:0 0 0 4px}chef-paginator .text{color:var(--chef-white);font-size:small;padding:.5em}chef-paginator .controls{display:-ms-flexbox;display:flex;color:var(--chef-white);padding:.5em;-ms-flex-align:center;align-items:center}chef-paginator .controls a{text-decoration:none;color:var(--chef-white)}chef-paginator .controls .left{margin-right:.5em}chef-paginator .controls .left,chef-paginator .controls .right{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;height:1em}chef-paginator .controls .right{margin-left:.5em}chef-paginator .pages a{margin:.2em;display:inline-block;-webkit-box-sizing:content-box;box-sizing:content-box;text-decoration:none;color:var(--chef-white);font-size:small;font-weight:700;border-radius:50%;border-width:1px;border-style:dotted;border-color:var(--chef-primary-bright);min-width:2em;height:2em;line-height:2em;text-align:center}chef-paginator .pages .active{color:var(--chef-primary-bright);border-style:solid;background-color:var(--chef-white)}chef-paginator .pages .active,chef-paginator .pages a:focus,chef-paginator .pages a:hover{border-color:var(--chef-white)}"; }
}

exports.chef_paginator = ChefPaginator;
