import { r as registerInstance, h } from './chunk-efdec40a.js';

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
class ChefToolbar {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("slot", null)));
    }
    static get style() { return "chef-toolbar chef-button{margin-top:0}chef-toolbar chef-button:first-child{margin-top:0;margin-left:0}"; }
}

export { ChefToolbar as chef_toolbar };
