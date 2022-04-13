import { h } from "@stencil/core";
/**
 * @description
 * Child component for chef-page-header that displays the heading. Only text and inline
 * elements should be nested in this component.
 *
 * @example
 * <chef-page-header>
 *   <chef-heading>Some Heading Text</chef-heading>
 *   <chef-subheading>Some subheading text that goes below the heading.</chef-subheading>
 * </chef-page-header>
 */
export class ChefHeading {
    render() {
        return (h("h1", { class: "page-title" },
            h("slot", null)));
    }
    static get is() { return "chef-heading"; }
    static get originalStyleUrls() { return {
        "$": ["./chef-heading.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-heading.css"]
    }; }
}
