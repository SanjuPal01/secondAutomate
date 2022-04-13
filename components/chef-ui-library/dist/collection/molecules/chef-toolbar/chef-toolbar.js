import { h } from "@stencil/core";
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
export class ChefToolbar {
    render() {
        return (h("div", null,
            h("slot", null)));
    }
    static get is() { return "chef-toolbar"; }
    static get originalStyleUrls() { return {
        "$": ["chef-toolbar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-toolbar.css"]
    }; }
}
