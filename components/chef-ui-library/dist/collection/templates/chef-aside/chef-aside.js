import { h } from "@stencil/core";
/**
 * @description
 * Belongs within <chef-layout>: Defines content aside from the page content ex: sidebar
 *
 * @example
 * <chef-aside>Sidebar Markup Goes Here</chef-aside>
 *
 */
export class ChefAside {
    render() {
        return (h("slot", null));
    }
    static get is() { return "chef-aside"; }
    static get originalStyleUrls() { return {
        "$": ["chef-aside.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-aside.css"]
    }; }
}
