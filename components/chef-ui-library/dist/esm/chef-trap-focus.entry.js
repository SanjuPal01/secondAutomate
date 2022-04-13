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
class ChefTrapFocus {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Class name to omit
         */
        this.trap = true;
    }
    render() {
        return (h("slot", null));
    }
    componentDidLoad() {
        const tabbableChildren = this.el.querySelectorAll('input, button, select, textarea, a, *[tabindex]');
        const firstTabbableChild = tabbableChildren.item(0);
        const lastTabbableChild = tabbableChildren.item(tabbableChildren.length - 1);
        this.el.addEventListener('keydown', (event) => {
            if (this.trap === false) {
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
    }
    get el() { return getElement(this); }
}

export { ChefTrapFocus as chef_trap_focus };
