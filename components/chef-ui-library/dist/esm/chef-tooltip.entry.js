import { r as registerInstance, h, H as Host, c as getElement } from './chunk-efdec40a.js';
import './chunk-d7ac2f15.js';
import { P as root, G as toNumber, i as isObject, d as convert, r as require$$1 } from './chunk-464ede08.js';

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

var now_1 = now;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce;

var func = convert('debounce', debounce_1);

func.placeholder = require$$1;
var debounce$1 = func;

/**
 * @description
 * chef-tooltip provides a way to create simple tooltips for elements.
 * You can change the background color of the tooltip with the --tooltip-color css variable.
 *
 * @example
 * <chef-tooltip for='fancy-button'>Fancy Button Tooltip</chef-tooltip>
 * <chef-button primary id='fancy-button'>A Button</chef-button>
 *
 * @example
 * <chef-tooltip for='another-button' delay=1000>A Tooltip with a longer delay</chef-tooltip>
 * <chef-button primary id='another-button'>Another Button</chef-button>
 *
 * @example
 * <chef-tooltip for='not-a-button'>A tooltip for something other than a button</chef-tooltip>
 * <div style='padding: 1em;' id='not-a-button'>This is not a button. But it has a tooltip.</div>
 *
 * @example
 * <chef-tooltip for='complex-tooltip'>
 *   <div style='padding: 1em;'>
 *     <span style='color: red;'>Tooltips can even contain markup and styling</span>
 *   </div>
 * </chef-tooltip>
 * <chef-button primary id='complex-tooltip'>Yet another button</chef-button>
 *
 * @example
 * <chef-tooltip style='--tooltip-color: lightblue;' for='fancy-background'>A Tooltip Of A Different Color</chef-tooltip>
 * <chef-button primary id='fancy-background'>Colored Tooltips!</chef-button>
 *
 * @example
 * <chef-tooltip follow for='following-tooltip'>Tooltip that follows</chef-tooltip>
 * <p id='following-tooltip'>
 *    once upon a midnight dreary, while i pondered, weak and weary. over many a
 *    quaint and curious volume of forgotten lore. while i nodded, nearly napping,
 *    suddenly there came a tapping. as of some one gently rapping, rapping at my
 *    chamber door. 'tis some visiter, i muttered, tapping at my chamber door. only
 *    this, and nothing more. ah, distinctly i remember it was in the bleak december.
 *    and each separate dying ember wrought its ghost upon the floor. eagerly i wished
 *    the morrow;—vainly i had sought to borrow. from my books surcease of
 *    sorrow—sorrow for the lost lenore. for the rare and radiant maiden whom the
 *    angels name lenore. nameless here for evermore. and the silken sad uncertain
 *    rustling of each purple curtain thrilled me, filled me with fantastic terrors
 * </p>
 *
 * @example
 * <chef-tooltip offset='-50 0' for='offset-tooltip'>offset tooltip</chef-tooltip>
 * <chef-button primary id='offset-tooltip'>Button</chef-button>
 *
 * @example
 * <chef-tooltip position='left' for='left-tooltip'>Left</chef-tooltip>
 * <chef-button primary id='left-tooltip'>Left</chef-button>
 *
 * @example
 * <chef-tooltip position='right' for='right-tooltip'>Right</chef-tooltip>
 * <chef-button primary id='right-tooltip'>Right</chef-button>
 *
 * @example
 * <chef-tooltip position='bottom' for='bottom-tooltip'>Bottom</chef-tooltip>
 * <chef-button primary id='bottom-tooltip'>Bottom</chef-button>
 *
 * @example
 * <chef-tooltip offset='0 -50' position='left' for='offset-position'>Left offset</chef-tooltip>
 * <chef-button primary id='offset-position'>Left offset</chef-button>
 *
 * @example
 * <chef-tooltip follow for='following-left' position='left'>Tooltip that follows</chef-tooltip>
 * <p id='following-left'>
 *    once upon a midnight dreary, while i pondered, weak and weary. over many a
 *    quaint and curious volume of forgotten lore. while i nodded, nearly napping,
 *    suddenly there came a tapping. as of some one gently rapping, rapping at my
 *    chamber door. 'tis some visiter, i muttered, tapping at my chamber door. only
 *    this, and nothing more. ah, distinctly i remember it was in the bleak december.
 *    and each separate dying ember wrought its ghost upon the floor. eagerly i wished
 *    the morrow;—vainly i had sought to borrow. from my books surcease of
 *    sorrow—sorrow for the lost lenore. for the rare and radiant maiden whom the
 *    angels name lenore. nameless here for evermore. and the silken sad uncertain
 *    rustling of each purple curtain thrilled me, filled me with fantastic terrors
 * </p>
 *
 * @example
 * <chef-tooltip interactable for='interactable-example'>
 *   The contents of this tooltip can be interacted with.
 * </chef-tooltip>
 * <chef-button primary id='interactable-example'>Interactable Tooltip</chef-button>
 * <p>
 *   By default, tooltip content can't be interacted with because the tooltip will hide
 *   after leaving the tooltip target. Applying an <code>interactable</code> attribute
 *   will prevent the tooltip from hiding while the mouse cursor is within the tooltip.
 * </p>
 */
class ChefTooltip {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The delay before the tooltip is displayed in milliseconds.
         */
        this.delay = 100;
        /**
         * The position of the tooltip in relation to the mouse/element.
         * Can be one of `top`, `left`, `right` or `bottom`.
         */
        this.position = 'top';
        /**
         * The x and y offset of the tooltip in pixels.
         */
        this.offset = '0 0';
        /**
         * If set the tooltip will follow the mouse when it is over the targetted element.
         */
        this.follow = false;
        /**
         * If set the tooltip will allow the mouse cursor to interact with its content.
         */
        this.interactable = false;
        this.visible = false;
        this._screenPosition = [0, 0];
    }
    set screenPosition([x, y]) {
        const [offsetX, offsetY] = this.offset.split(' ').map((i) => parseInt(i, 10));
        this._screenPosition = [x + (offsetX || 0), y + (offsetY || 0)];
    }
    get screenPosition() {
        return this._screenPosition;
    }
    componentDidLoad() {
        const ref = document.querySelector(`#${this.for}`);
        if (ref) {
            if (this.follow) {
                this.setupDynamicPositioning(ref);
            }
            else {
                this.setupStaticPositioning(ref);
            }
        }
    }
    render() {
        const [x, y] = this.screenPosition;
        const styles = { left: `${x}px`, top: `${y}px` };
        const classNames = [
            this.visible ? 'visible' : '',
            this.interactable ? 'interactable' : '',
            this.position,
            this.follow ? 'follow' : ''
        ].join(' ');
        return (h(Host, { class: classNames, style: styles }, h("slot", null)));
    }
    setupDynamicPositioning(ref) {
        const delayedShow = debounce$1(this.delay, () => this.visible = true);
        const handleMouseEnter = (event) => {
            this.screenPosition = [event.clientX, event.clientY];
        };
        const handleMouseMove = (event) => {
            this.screenPosition = [event.clientX, event.clientY];
            delayedShow();
        };
        const handleMouseLeave = () => {
            delayedShow.cancel();
            this.visible = false;
        };
        ref.addEventListener('mouseenter', handleMouseEnter);
        ref.addEventListener('mousemove', handleMouseMove);
        ref.addEventListener('mouseleave', handleMouseLeave);
    }
    setupStaticPositioning(ref) {
        let transitionTimeoutID, hideTimeoutID;
        const transitionDuration = parseFloat(getComputedStyle(this.el).transitionDuration) * 1000;
        const hideTooltip = () => {
            hideTimeoutID = setTimeout(() => this.visible = false, this.delay);
            transitionTimeoutID = setTimeout(handleTransitionComplete, transitionDuration);
        };
        const cancelHideTooltip = () => {
            clearTimeout(hideTimeoutID);
            clearTimeout(transitionTimeoutID);
        };
        const handleMouseEnter = () => {
            cancelHideTooltip();
            addEventListener('scroll', handleScroll);
        };
        const handleMouseMove = debounce$1(this.delay, () => {
            this.setStaticPosition(ref);
            this.visible = true;
        });
        const handleScroll = () => this.setStaticPosition(ref);
        const handleMouseLeave = () => {
            handleMouseMove.cancel();
            hideTooltip();
        };
        const handleTransitionComplete = () => removeEventListener('scroll', handleScroll);
        const handleTooltipEnter = () => {
            cancelHideTooltip();
        };
        const handleTooltipLeave = () => {
            hideTooltip();
        };
        if (this.interactable) {
            this.el.addEventListener('mouseenter', handleTooltipEnter);
            this.el.addEventListener('mouseleave', handleTooltipLeave);
        }
        ref.addEventListener('mouseenter', handleMouseEnter);
        ref.addEventListener('mousemove', handleMouseMove);
        ref.addEventListener('mouseleave', handleMouseLeave);
    }
    setStaticPosition(ref) {
        const boundingRect = ref.getBoundingClientRect();
        const top = boundingRect.top;
        const bottom = top + boundingRect.height;
        const left = boundingRect.left;
        const right = left + boundingRect.width;
        const centerXOffset = boundingRect.width / 2;
        const centerYOffset = boundingRect.height / 2;
        switch (this.position) {
            case 'left':
                this.screenPosition = [left, top + centerYOffset];
                break;
            case 'right':
                this.screenPosition = [right, top + centerYOffset];
                break;
            case 'bottom':
                this.screenPosition = [left + centerXOffset, bottom];
                break;
            case 'top':
            default:
                this.screenPosition = [left + centerXOffset, top];
                break;
        }
    }
    get el() { return getElement(this); }
    static get style() { return "chef-tooltip{--background-color:var(--tooltip-color,var(--chef-white));position:fixed;opacity:0;z-index:300;border-radius:var(--chef-border-radius);-webkit-box-shadow:var(--chef-box-shadow);box-shadow:var(--chef-box-shadow);pointer-events:none;padding:1em;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-timing-function:ease;transition-timing-function:ease;font-family:var(--chef-font-family);font-size:var(--chef-base-font-size);font-weight:400;color:var(--chef-primary-dark)}chef-tooltip,chef-tooltip:after{display:block;background-color:var(--background-color)}chef-tooltip:after{content:\"\";width:.75em;height:.75em;position:absolute;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg)}chef-tooltip.top{-webkit-transform:translate(-50%,calc(-100% - .75em));transform:translate(-50%,calc(-100% - .75em))}chef-tooltip.top:after{left:50%;top:100%}chef-tooltip.left{-webkit-transform:translate(calc(-100% - .75em),-50%);transform:translate(calc(-100% - .75em),-50%)}chef-tooltip.left:after{left:100%;top:50%}chef-tooltip.right{-webkit-transform:translate(.75em,-50%);transform:translate(.75em,-50%)}chef-tooltip.right:after{left:0;top:50%}chef-tooltip.bottom{-webkit-transform:translate(-50%,.75em);transform:translate(-50%,.75em)}chef-tooltip.bottom:after{left:50%;top:0}chef-tooltip.visible{opacity:1;-webkit-transition-property:opacity;transition-property:opacity}chef-tooltip.visible.interactable{pointer-events:all}chef-tooltip.follow{-webkit-transition-property:opacity,top,left;transition-property:opacity,top,left}"; }
}

export { ChefTooltip as chef_tooltip };
