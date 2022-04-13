import { r as registerInstance, d as createEvent, h, H as Host } from './chunk-efdec40a.js';
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
var ChefBanner = /** @class */ (function () {
    function ChefBanner(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The type of header to show. Can be one of 'warn' or 'info'.
         */
        this.type = 'info';
        this.buttonClicked = createEvent(this, "buttonClicked", 7);
    }
    ChefBanner.prototype.render = function () {
        var iconString = this.getIconString();
        var icon = (h("chef-icon", null, iconString));
        var button = (h("chef-button", { onClick: this.handleClick.bind(this) }, this.buttonText));
        return (h(Host, { class: this.type }, iconString ? icon : null, h("slot", null), this.buttonText ? button : null));
    };
    ChefBanner.prototype.handleClick = function () {
        this.buttonClicked.emit();
    };
    ChefBanner.prototype.getIconString = function () {
        switch (this.type) {
            case 'warn':
                return 'warning';
            default:
                return '';
        }
    };
    Object.defineProperty(ChefBanner, "style", {
        get: function () { return "chef-banner{-ms-flex-align:center;align-items:center;background-color:var(--black);color:var(--white);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;min-height:50px}chef-banner chef-icon{margin-right:.5em}chef-banner chef-button{--background-color:transparent;--border-color:var(--white);--color:var(--white);margin-left:2em}chef-banner.info chef-button:active,chef-banner.info chef-button:hover{--background-color:var(--white);--color:var(--black)}chef-banner.warn{background-color:var(--chef-critical)}chef-banner.warn chef-button:active,chef-banner.warn chef-button:hover{--background-color:var(--white);--color:var(--chef-critical)}"; },
        enumerable: true,
        configurable: true
    });
    return ChefBanner;
}());
export { ChefBanner as chef_banner };
