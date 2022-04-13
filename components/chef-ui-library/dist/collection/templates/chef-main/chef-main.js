import { h } from "@stencil/core";
/**
 * @description
 * Belongs within <chef-layout>: Specifies the main content of a document
 *
 * @example
 * <chef-main> Main Part of Page goes here </chef-main>
 *
 */
export class ChefMain {
    render() {
        return (h("slot", null));
    }
    static get is() { return "chef-main"; }
    static get originalStyleUrls() { return {
        "$": ["chef-main.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-main.css"]
    }; }
}
