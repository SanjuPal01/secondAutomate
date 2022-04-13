'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

/**
 * @description
 * Belongs within <chef-layout>: Defines content aside from the page content ex: sidebar
 *
 * @example
 * <chef-aside>Sidebar Markup Goes Here</chef-aside>
 *
 */
class ChefAside {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("slot", null));
    }
    static get style() { return "chef-aside{grid-area:aside;-ms-grid-row:2;-ms-grid-column:1;-ms-grid-row-span:2;display:block}"; }
}

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
class ChefLayout {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("slot", null));
    }
    static get style() { return "chef-layout{display:grid;grid-template-columns:1fr 5fr;grid-template-rows:70px auto;grid-template-areas:\"header header\" \"aside  main\";height:100vh;display:-ms-grid;-ms-grid-columns:1fr 1fr 1fr 1fr 1fr 1fr;-ms-grid-rows:70px auto auto}"; }
}

/**
 * @description
 * Belongs within <chef-layout>: Specifies the main content of a document
 *
 * @example
 * <chef-main> Main Part of Page goes here </chef-main>
 *
 */
class ChefMain {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("slot", null));
    }
    static get style() { return "chef-main{grid-area:main;min-width:0;-ms-grid-row:2;-ms-grid-column:2;-ms-grid-column-span:5;display:block}"; }
}

exports.chef_aside = ChefAside;
exports.chef_layout = ChefLayout;
exports.chef_main = ChefMain;
