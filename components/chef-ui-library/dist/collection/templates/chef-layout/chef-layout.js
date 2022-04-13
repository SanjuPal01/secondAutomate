import { h } from "@stencil/core";
/**
 * @description
 * Layout container for <chef-header>, <chef-aside> and <chef-main>
 *
 * @example
 * <chef-layout>
 *    <chef-header style="border:1px dotted black;">HEADER</chef-header>
 *    <chef-aside style="border:1px dotted black;">ASIDE</chef-aside>
 *    <chef-main style="border:1px dotted black;">MAIN</chef-main>
 * </chef-layout>
 *
 */
export class ChefLayout {
    render() {
        return (h("slot", null));
    }
    static get is() { return "chef-layout"; }
    static get originalStyleUrls() { return {
        "$": ["chef-layout.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-layout.css"]
    }; }
}
