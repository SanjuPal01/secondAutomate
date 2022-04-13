'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

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
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("slot", null));
    }
    static get style() { return "chef-header{grid-area:header;-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:6;display:block}"; }
}

exports.chef_header = ChefHeader;
