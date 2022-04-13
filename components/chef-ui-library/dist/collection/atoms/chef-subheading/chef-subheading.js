import { h } from "@stencil/core";
/**
 * @description
 * Child component for chef-page-header that displays the sub-heading (the text below the heading).
 * Only text and inline elements should be nested inside of this element.
 *
 * @example
 * <chef-page-header>
 *   <chef-heading>Some Heading Text</chef-heading>
 *   <chef-subheading>Some subheading text that goes below the heading.</chef-subheading>
 * </chef-page-header>
 */
export class ChefSubheading {
    render() {
        return (h("p", { class: "page-subtitle" },
            h("slot", null)));
    }
    static get is() { return "chef-subheading"; }
    static get originalStyleUrls() { return {
        "$": ["./chef-subheading.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-subheading.css"]
    }; }
}
