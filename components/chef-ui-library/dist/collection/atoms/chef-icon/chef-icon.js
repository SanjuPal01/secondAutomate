import { h } from "@stencil/core";
/**
 * @description
 * Display a material icon.
 *
 * @example
 * <chef-icon style='font-size: 5em'>accessibility</chef-icon>
 *
 * @example
 * <chef-icon style='font-size: 5em; color: red;'>alarm</chef-icon>
 */
export class ChefIcon {
    render() {
        return (h("slot", null));
    }
    static get is() { return "chef-icon"; }
    static get originalStyleUrls() { return {
        "$": ["chef-icon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-icon.css"]
    }; }
}
