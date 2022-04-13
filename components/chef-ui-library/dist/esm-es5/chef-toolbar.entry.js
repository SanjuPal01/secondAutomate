import { r as registerInstance, h } from './chunk-efdec40a.js';
/**
 * @description
 * A container for buttons for above tables
 *
 * @example
 *
 * <chef-toolbar>
 *  <chef-button>A button</chef-button>
 * </chef-toolbar>
 */
var ChefToolbar = /** @class */ (function () {
    function ChefToolbar(hostRef) {
        registerInstance(this, hostRef);
    }
    ChefToolbar.prototype.render = function () {
        return (h("div", null, h("slot", null)));
    };
    Object.defineProperty(ChefToolbar, "style", {
        get: function () { return "chef-toolbar chef-button{margin-top:0}chef-toolbar chef-button:first-child{margin-top:0;margin-left:0}"; },
        enumerable: true,
        configurable: true
    });
    return ChefToolbar;
}());
export { ChefToolbar as chef_toolbar };
