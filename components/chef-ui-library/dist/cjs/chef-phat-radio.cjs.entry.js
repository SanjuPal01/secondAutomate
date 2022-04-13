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
 * <chef-phat-radio>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-phat-radio>
 *
 * @example
 * <chef-phat-radio deselectable value="opt2">
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-phat-radio>
 */
class ChefPhatRadio {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * The value of the currently toggled option.
         */
        this.value = '';
        /**
         * An optional property that when true allows users to deselect an option by selecting a currently selected option
         */
        this.deselectable = false;
        this.change = __chunk_1.createEvent(this, "change", 7);
        this.input = __chunk_1.createEvent(this, "input", 7);
    }
    handleClick(event) {
        const target = event.target;
        const option = target.closest('chef-option');
        if (option) {
            this.selectOption(option);
        }
    }
    handleKeypress(event) {
        const target = event.target;
        const option = target.closest('chef-option');
        if (option && event.key === 'Enter') {
            this.selectOption(option);
        }
    }
    componentDidLoad() {
        const options = this.clearOptions();
        this.selected = __chunk_7.find(['value', this.value], options);
        // When option to deselect is true, we also do not want to make a default
        // selection upon load, so we return early unless a value has been explicity set by prop
        if (!this.selected && this.deselectable) {
            return;
        }
        if (!this.selected) {
            this.selected = this.el.querySelector('chef-option[selected]') || options[0];
            this.value = this.selected.value;
        }
        this.selected.selected = true;
        // Set tabindex on options to make them keyboard focusable
        options.forEach(option => {
            option.setAttribute('tabindex', '0');
        });
    }
    componentDidUpdate() {
        this.clearOptions();
        // Return early if the update is empty, because this means we are deselecting
        if (this.deselectable && this.value === '') {
            return;
        }
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
    selectOption(option) {
        const isSameOption = this.value === option.value;
        this.value = this.deselectable && isSameOption ? '' : option.value;
        this.change.emit();
        this.input.emit();
    }
    get el() { return __chunk_1.getElement(this); }
    static get style() { return "\@charset \"UTF-8\";chef-phat-radio{--active-color:var(--toggle-active-color,var(--chef-primary-bright));display:block}chef-phat-radio chef-option{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;background-color:var(--chef-white);-webkit-box-shadow:0 0 16px 0 #e6ebee;box-shadow:0 0 16px 0 #e6ebee;cursor:pointer;padding:1em;border-radius:5px;height:60px;width:175px;margin-right:8px}chef-phat-radio chef-option:nth-child(n+2){margin-left:8px}chef-phat-radio chef-option .option-content{padding-left:.5em}chef-phat-radio chef-option:before{font-family:Material Icons;content:\"\";color:var(--chef-grey);font-size:20px}chef-phat-radio chef-option:hover,chef-phat-radio chef-option:hover:before{color:var(--active-color);-webkit-transition:color 1s ease;transition:color 1s ease}chef-phat-radio chef-option.selected{color:var(--active-color)}chef-phat-radio chef-option.selected:before{font-family:Material Icons;content:\"\";color:var(--active-color)}"; }
}

exports.chef_phat_radio = ChefPhatRadio;
