'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

/**
 * @description
 * The `<chef-expander>` molecule is used to expand/collapse content.
 *
 * @example
 * <chef-expander>
 *   <h1>Some collapsed content</h1>
 * </chef-expander>
 * <chef-expander opened>
 *   <h1>Some expanded content</h1>
 * </chef-expander>
 *
 * @example
 * <chef-button secondary id='open-btn'>Open</chef-button>
 * <chef-button secondary id='close-btn'>Close</chef-button>
 * <chef-button secondary id='toggle-btn'>Toggle</chef-button>
 * <chef-expander id='expander'>
 *   <h1>Some content</h1>
 * </chef-expander>
 *
 * <style>
 *  chef-button,
 *  chef-expander[opened] { margin: 1em; }
 * </style>
 *
 * <script>
 *   const openBtn = document.getElementById('open-btn');
 *   const closeBtn = document.getElementById('close-btn');
 *   const toggleBtn = document.getElementById('toggle-btn');
 *   const expander = document.getElementById('expander');
 *
 *   openBtn.addEventListener('click', e => expander.open());
 *   closeBtn.addEventListener('click', e => expander.close());
 *   toggleBtn.addEventListener('click', e => expander.toggle());
 * </script>
 */
class ChefExpander {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * Indicates that the expander is opened.
         */
        this.opened = false;
    }
    async open() {
        this.opened = true;
    }
    async close() {
        this.opened = false;
    }
    async toggle() {
        this.opened = !this.opened;
    }
    render() {
        return (__chunk_1.h("slot", null));
    }
    static get style() { return "chef-expander{display:block}chef-expander>*{display:none}chef-expander[opened]>*{display:inherit}"; }
}

exports.chef_expander = ChefExpander;
