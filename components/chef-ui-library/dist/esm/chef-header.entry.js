import { r as registerInstance, h } from './chunk-efdec40a.js';

/**
 * @description
 * Belongs within <chef-layout>: Specifies the  header for the application, that contains the main navigation.
 *
 * @example
 * <chef-header>Main Navigation Goes HERE</chef-header>
 *
 */
class ChefHeader {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("slot", null));
    }
    static get style() { return "chef-header{grid-area:header;-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:6;display:block}"; }
}

export { ChefHeader as chef_header };
