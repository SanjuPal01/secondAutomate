import { r as registerInstance, h, c as getElement } from './chunk-efdec40a.js';
import './chunk-d7ac2f15.js';
import { G as toNumber, d as convert, r as require$$1 } from './chunk-464ede08.js';
import { b as baseRest } from './chunk-5cf946a6.js';

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number|Object} Returns the timer id or timeout object.
 */
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function() { func.apply(undefined, args); }, wait);
}

var _baseDelay = baseDelay;

/**
 * Invokes `func` after `wait` milliseconds. Any additional arguments are
 * provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.delay(function(text) {
 *   console.log(text);
 * }, 1000, 'later');
 * // => Logs 'later' after one second.
 */
var delay = baseRest(function(func, wait, args) {
  return _baseDelay(func, toNumber(wait) || 0, args);
});

var delay_1 = delay;

var func = convert('delay', delay_1);

func.placeholder = require$$1;
var delay$1 = func;

/**
 * @description
 * Scrollfader behavior. The element contained within the scrollfader will remain invisible until the page is scrolled to the scrollfader. The element will then fade in. This is generally used for elements that will have a fixed position on the page, otherwise they would never be visible.
 *
 * Note: IE11 Support is dependent on a polyfill.
 *
 * @example
 * <div style='height: 2000px'>
 *   <h1>Scroll to see the scrollfader in action</h1>
 *   <chef-scrollfader>
 *     <h2 style='position: fixed;'>I should fade in when the document is scrolled</h2>
 *   </chef-scrollfader>
 * </div>
 */
class ChefScrollfader {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("div", { class: "sentinel" }),
            h("slot", null)
        ];
    }
    componentDidLoad() {
        const observer = new IntersectionObserver((sentinels) => {
            const [sentinel] = sentinels;
            if (!sentinel.isIntersecting && sentinel.boundingClientRect.top <= 0) {
                this.el.classList.add('visible');
            }
            else {
                this.el.classList.remove('visible');
            }
        });
        // This isn't ideal, but when loading in angular, elements are hidden
        // until they all load and then displayed. Since this component uses
        // an animation to fade in, it flashes for a second on load and fades
        // out. The delay just prevents the IntersectionObserver from binding
        // until hopefully after angular has finished loading everything.
        // TODO: Find a better way to handle this.
        delay$1(2000, () => {
            observer.observe(this.el.querySelector('.sentinel'));
        });
    }
    get el() { return getElement(this); }
    static get style() { return "chef-scrollfader.hydrated{-webkit-transition:opacity .5s ease-out;transition:opacity .5s ease-out}chef-scrollfader.visible{opacity:1;pointer-events:auto}chef-scrollfader{display:block;opacity:0;pointer-events:none}"; }
}

export { ChefScrollfader as chef_scrollfader };
