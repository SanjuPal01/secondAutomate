'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

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
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("div", null, __chunk_1.h("slot", null)));
    }
    static get style() { return "chef-toolbar chef-button{margin-top:0}chef-toolbar chef-button:first-child{margin-top:0;margin-left:0}"; }
}

exports.chef_toolbar = ChefToolbar;
