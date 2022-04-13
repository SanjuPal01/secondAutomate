import { r as registerInstance, h } from './chunk-efdec40a.js';

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
        registerInstance(this, hostRef);
    }
    render() {
        return (h("slot", null));
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
        registerInstance(this, hostRef);
    }
    render() {
        return (h("slot", null));
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
        registerInstance(this, hostRef);
    }
    render() {
        return (h("slot", null));
    }
    static get style() { return "chef-main{grid-area:main;min-width:0;-ms-grid-row:2;-ms-grid-column:2;-ms-grid-column-span:5;display:block}"; }
}

export { ChefAside as chef_aside, ChefLayout as chef_layout, ChefMain as chef_main };
