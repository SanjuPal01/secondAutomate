'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');
require('./chunk-f5b13333.js');
require('./chunk-6373e70b.js');
const __chunk_7 = require('./chunk-ae8f8ffe.js');

/**
 * @description
 * A toggle button. Uses the chef-option atom to define it's different states.
 *
 * @example
 * <chef-radio>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-radio>
 */
class ChefRadio {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * The value of the currently toggled option.
         */
        this.value = '';
        this.change = __chunk_1.createEvent(this, "change", 7);
        this.input = __chunk_1.createEvent(this, "input", 7);
    }
    handleClick(event) {
        this.value = event.target.closest('chef-option').value;
        this.change.emit();
        this.input.emit();
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
    static get style() { return "\@charset \"UTF-8\";chef-radio{--active-color:var(--toggle-active-color,var(--chef-primary-bright))}chef-radio chef-option{display:block;cursor:pointer;padding:.5em .75em;-webkit-transition:color .5s ease;transition:color .5s ease}chef-radio chef-option .option-content{padding-left:.5em}chef-radio chef-option:before{font-family:Material Icons;content:\"\";color:var(--chef-grey);vertical-align:-2px}chef-radio chef-option:hover,chef-radio chef-option:hover:before{color:var(--active-color);-webkit-transition:color 1s ease;transition:color 1s ease}chef-radio chef-option.selected{color:var(--active-color)}chef-radio chef-option.selected:before{font-family:Material Icons;content:\"\";color:var(--active-color)}"; }
}

exports.chef_radio = ChefRadio;
