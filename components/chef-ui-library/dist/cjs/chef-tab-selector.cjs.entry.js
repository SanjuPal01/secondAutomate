'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');
require('./chunk-f5b13333.js');
require('./chunk-6373e70b.js');
const __chunk_7 = require('./chunk-ae8f8ffe.js');

/**
 * @description
 * A selection of tabs. Uses the chef-option atom to define its different states.
 *
 * @example
 * <chef-tab-selector>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-tab-selector>
 *
 * @example
 * <chef-tab-selector value='opt2'>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-tab-selector>
 *
 * @example
 * <chef-tab-selector>
 *   <chef-option value='opt1'><chef-icon>thumb_up</chef-icon></chef-option>
 *   <chef-option value='opt2'><chef-icon>thumb_down</chef-icon></chef-option>
 * </chef-tab-selector>
 *
 * @example
 * <script>
 *   const toggle = document.querySelector('#ex1toggle');
 *   toggle.addEventListener('change', (event) => alert(event.target.value));
 * </script>
 *
 * <chef-tab-selector id='ex1toggle'>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-tab-selector>
 */
class ChefTabSelector {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * The value of the currently selected tab.
         */
        this.value = '';
        this.change = __chunk_1.createEvent(this, "change", 7);
        this.input = __chunk_1.createEvent(this, "input", 7);
    }
    handleClick(event) {
        const option = event.target.closest('chef-option');
        if (option) {
            this.value = option.value;
            this.change.emit();
            this.input.emit();
        }
    }
    componentDidLoad() {
        const options = this.clearOptions();
        this.selected = __chunk_7.find(['value', this.value], options);
        if (!this.selected) {
            this.selected = this.el.querySelector('chef-option[selected]') || options[0];
            this.value = this.selected.value;
        }
        this.selected.selected = true;
    }
    componentDidUpdate() {
        this.clearOptions();
        this.selected = this.el.querySelector(`chef-option[value='${this.value}']`);
        this.selected.selected = true;
    }
    render() {
        return (__chunk_1.h("slot", null));
    }
    clearOptions() {
        const options = Array.from(this.el.querySelectorAll('chef-option'));
        options.forEach((opt) => opt.selected = false);
        return options;
    }
    get el() { return __chunk_1.getElement(this); }
    static get style() { return "chef-tab-selector chef-option{position:relative;display:inline-block;color:var(--chef-primary-dark);font-size:16px;line-height:32px;min-width:72px;padding:8px 16px;cursor:pointer;background:transparent}chef-tab-selector chef-option:before{display:block;content:\"\";position:absolute;bottom:-2px;height:2px;left:0;width:100%;background:transparent}chef-tab-selector chef-option.selected:before{background:var(--chef-primary-bright)}chef-tab-selector chef-option:focus,chef-tab-selector chef-option:hover{background:#00f;background:var(--chef-lightest-grey)}chef-tab-selector chef-option:active{background:var(--chef-light-grey)}"; }
}

exports.chef_tab_selector = ChefTabSelector;
