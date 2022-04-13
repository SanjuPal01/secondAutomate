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
 * <chef-toggle>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-toggle>
 *
 * @example
 * <chef-toggle value='opt2'>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-toggle>
 *
 * @example
 * <chef-toggle>
 *   <chef-option value='opt1'><chef-icon>thumb_up</chef-icon></chef-option>
 *   <chef-option value='opt2'><chef-icon>thumb_down</chef-icon></chef-option>
 * </chef-toggle>
 *
 * @example
 * <script>
 *   const toggle = document.querySelector('#ex1toggle');
 *   toggle.addEventListener('change', (event) => alert(event.target.value));
 * </script>
 *
 * <chef-toggle id='ex1toggle'>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-toggle>
 */
class ChefToggle {
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
    static get style() { return "chef-toggle{--default-active-color:var(--chef-white);--default-active-background-color:var(--chef-primary-bright);--active-color:var(--toggle-active-color,var(--default-active-color));--active-background-color:var(--toggle-active-background-color,var(--default-active-background-color));display:-ms-inline-flexbox;display:inline-flex;background-color:var(--chef-white);-webkit-box-shadow:var(--chef-box-shadow);box-shadow:var(--chef-box-shadow);border-radius:3em}chef-toggle chef-option{display:block;cursor:pointer;padding:.5em .75em;border-radius:3em;overflow:hidden;position:relative;-webkit-transition:color .5s ease;transition:color .5s ease}chef-toggle chef-option .option-content{position:relative}chef-toggle chef-option:before{content:\"\";display:block;position:absolute;height:calc(100% + .5em);width:calc(100% + .75em);background-color:var(--active-background-color);left:-.75em;top:-.5em;-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}chef-toggle chef-option.selected,chef-toggle chef-option:hover{color:var(--active-color)}chef-toggle chef-option.selected:before,chef-toggle chef-option:hover:before{-webkit-transform:translateX(0);transform:translateX(0)}"; }
}

exports.chef_toggle = ChefToggle;
