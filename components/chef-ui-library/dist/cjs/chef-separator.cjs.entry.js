'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

/**
 * @description
 * The `<chef-separator>` molecule is used to separate sections of content.
 *
 * @example
 * <chef-separator></chef-separator>
 *
 * @example
 * <chef-separator>
 *   <chef-pill>10 of 48</chef-pill>
 * </chef-separator>
 *
 * @example
 * <chef-separator>
 *   <chef-pill>
 *     <chef-loading-spinner size='14'></chef-loading-spinner>
 *     Loading...
 *   </chef-pill>
 * </chef-separator>
 *
 * @example
 * <chef-separator>
 *   <chef-button id='load-btn'>Load more</chef-button>
 * </chef-separator>
 *
 * <script>
 *   const loadBtn = document.getElementById('load-btn');
 *   loadBtn.addEventListener('click', e => alert('load more'));
 * </script>
 *
 * @example
 * <chef-separator>
 *   <chef-pill id='expand-pill'>
 *     Scan Jobs <chef-pill>12</chef-pill>
 *   </chef-pill>
 *   <chef-button id='expand-btn'>
 *     <chef-icon>add</chef-icon>
 *   </chef-button>
 * </chef-separator>
 * <chef-expander id='expander'>
 *   <h2>Some content</h2>
 * </chef-expander>
 *
 * <style>
 *   #expand-pill { background: var(--chef-lightest-grey); }
 *   #expand-btn {
 *     background: var(--chef-lightest-grey); position: absolute; right: 0; margin: 0;
 *   }
 * </style>
 *
 * <script>
 *   const expandBtn = document.getElementById('expand-btn');
 *   const expander = document.getElementById('expander');
 *   expandBtn.addEventListener('click', () => expander.toggle());
 * </script>
 */
class ChefSeparator {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("div", { class: "wrap" }, __chunk_1.h("slot", null)));
    }
    static get style() { return "chef-separator{display:block;position:relative;margin:1em 0}chef-separator:before{content:\"\";display:block;position:absolute;top:50%;margin-top:-1px;height:2px;width:100%;background-color:var(--chef-light-grey)}chef-separator .wrap{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:relative;z-index:10}"; }
}

exports.chef_separator = ChefSeparator;
