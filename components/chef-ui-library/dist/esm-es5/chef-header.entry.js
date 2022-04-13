import { r as registerInstance, h } from './chunk-efdec40a.js';
/**
 * @description
 * Belongs within <chef-layout>: Specifies the  header for the application, that contains the main navigation.
 *
 * @example
 * <chef-header>Main Navigation Goes HERE</chef-header>
 *
 */
var ChefHeader = /** @class */ (function () {
    function ChefHeader(hostRef) {
        registerInstance(this, hostRef);
    }
    ChefHeader.prototype.render = function () {
        return (h("slot", null));
    };
    Object.defineProperty(ChefHeader, "style", {
        get: function () { return "chef-header{grid-area:header;-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:6;display:block}"; },
        enumerable: true,
        configurable: true
    });
    return ChefHeader;
}());
export { ChefHeader as chef_header };
