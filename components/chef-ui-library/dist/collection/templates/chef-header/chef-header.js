import { h } from "@stencil/core";
/**
 * @description
 * Belongs within <chef-layout>: Specifies the  header for the application, that contains the main navigation.
 *
 * @example
 * <chef-header>Main Navigation Goes HERE</chef-header>
 *
 */
export class ChefHeader {
    render() {
        return (h("slot", null));
    }
    static get is() { return "chef-header"; }
    static get originalStyleUrls() { return {
        "$": ["chef-header.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-header.css"]
    }; }
}
