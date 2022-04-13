import { r as registerInstance, h, c as getElement } from './chunk-efdec40a.js';
/**
 * @description
 * A wrapper element that traps focus inside of the element. Very useful for accessibility purposes.
 *
 * @example
 *
 * <chef-trap-focus>
 *  <input type="text"/>
 *  <p>Some non-focus-able text</p>
 *  <p tabindex="0">Some focus-able text</p>
 *  <input type="text"/>
 *  <button>Button</button>
 * </chef-trap-focus>
 */
var ChefTrapFocus = /** @class */ (function () {
    function ChefTrapFocus(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Class name to omit
         */
        this.trap = true;
    }
    ChefTrapFocus.prototype.render = function () {
        return (h("slot", null));
    };
    ChefTrapFocus.prototype.componentDidLoad = function () {
        var _this = this;
        var tabbableChildren = this.el.querySelectorAll('input, button, select, textarea, a, *[tabindex]');
        var firstTabbableChild = tabbableChildren.item(0);
        var lastTabbableChild = tabbableChildren.item(tabbableChildren.length - 1);
        this.el.addEventListener('keydown', function (event) {
            if (_this.trap === false) {
                return;
            }
            if (event.key === 'Tab') {
                if (event.shiftKey) { // shift + tab
                    if (document.activeElement === firstTabbableChild) {
                        lastTabbableChild.focus();
                        event.preventDefault();
                    }
                }
                else { // tab
                    if (document.activeElement === lastTabbableChild) {
                        firstTabbableChild.focus();
                        event.preventDefault();
                    }
                }
            }
        });
    };
    Object.defineProperty(ChefTrapFocus.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return ChefTrapFocus;
}());
export { ChefTrapFocus as chef_trap_focus };
