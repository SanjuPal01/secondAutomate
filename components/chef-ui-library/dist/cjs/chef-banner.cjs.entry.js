'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

/**
 * @description
 * Displays a header bar with the specified content and a button to take corrective action (if passed).
 *
 * @example
 * <chef-banner type="warn">This is a warning without a button!</chef-banner>
 *
 * @example
 * <chef-banner type="warn" button-text="Click me">
 *    This is a warning with a button!&nbsp<a href="https://www.chef.io/contact-us/" target="_blank">Contact support for help</a>.
 * </chef-banner>
 *
 * @example
 * <chef-banner type="info" button-text="Click me">This is just info.</chef-banner>
 *
 * @example
 * <chef-banner>This is also an info message.</chef-banner>
 */
class ChefBanner {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * The type of header to show. Can be one of 'warn' or 'info'.
         */
        this.type = 'info';
        this.buttonClicked = __chunk_1.createEvent(this, "buttonClicked", 7);
    }
    render() {
        const iconString = this.getIconString();
        const icon = (__chunk_1.h("chef-icon", null, iconString));
        const button = (__chunk_1.h("chef-button", { onClick: this.handleClick.bind(this) }, this.buttonText));
        return (__chunk_1.h(__chunk_1.Host, { class: this.type }, iconString ? icon : null, __chunk_1.h("slot", null), this.buttonText ? button : null));
    }
    handleClick() {
        this.buttonClicked.emit();
    }
    getIconString() {
        switch (this.type) {
            case 'warn':
                return 'warning';
            default:
                return '';
        }
    }
    static get style() { return "chef-banner{-ms-flex-align:center;align-items:center;background-color:var(--black);color:var(--white);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;min-height:50px}chef-banner chef-icon{margin-right:.5em}chef-banner chef-button{--background-color:transparent;--border-color:var(--white);--color:var(--white);margin-left:2em}chef-banner.info chef-button:active,chef-banner.info chef-button:hover{--background-color:var(--white);--color:var(--black)}chef-banner.warn{background-color:var(--chef-critical)}chef-banner.warn chef-button:active,chef-banner.warn chef-button:hover{--background-color:var(--white);--color:var(--chef-critical)}"; }
}

exports.chef_banner = ChefBanner;
