import { u as flatRest, v as getFuncName, L as LodashWrapper, w as getData, x as isLaziable, o as isArray, d as convert, r as require$$1, y as require$$0 } from './chunk-464ede08.js';
/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8, WRAP_PARTIAL_FLAG = 32, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256;
/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
    return flatRest(function (funcs) {
        var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
        if (fromRight) {
            funcs.reverse();
        }
        while (index--) {
            var func = funcs[index];
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
                var wrapper = new LodashWrapper([], true);
            }
        }
        index = wrapper ? index : length;
        while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == 'wrapper' ? getData(func) : undefined;
            if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            }
            else {
                wrapper = (func.length == 1 && isLaziable(func))
                    ? wrapper[funcName]()
                    : wrapper.thru(func);
            }
        }
        return function () {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
            }
            var index = 0, result = length ? funcs[index].apply(this, args) : value;
            while (++index < length) {
                result = funcs[index].call(this, result);
            }
            return result;
        };
    });
}
var _createFlow = createFlow;
/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */
var flow = _createFlow();
var flow_1 = flow;
var func = convert('flow', flow_1);
func.placeholder = require$$1;
var flow$1 = func;
var pipe = flow$1;
var func$1 = convert('get', require$$0);
func$1.placeholder = require$$1;
var get = func$1;
export { get as g, pipe as p };
