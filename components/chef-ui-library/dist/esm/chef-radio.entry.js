import { r as registerInstance, d as createEvent, h, c as getElement } from './chunk-efdec40a.js';
import './chunk-d7ac2f15.js';
import './chunk-464ede08.js';
import { f as find } from './chunk-7cba3003.js';

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
        registerInstance(this, hostRef);
        /**
         * The value of the currently toggled option.
         */
        this.value = '';
        this.change = createEvent(this, "change", 7);
        this.input = createEvent(this, "input", 7);
    }
    handleClick(event) {
        this.value = event.target.closest('chef-option').value;
        this.change.emit();
        this.input.emit();
    }
    componentDidLoad() {
        const options = this.clearOptions();
        this.selected = find(['value', this.value], options);
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
        return (h("slot", null));
    }
    clearOptions() {
        const options = Array.from(this.el.querySelectorAll('chef-option'));
        options.forEach((opt) => opt.selected = false);
        return options;
    }
    get el() { return getElement(this); }
    static get style() { return "\@charset \"UTF-8\";chef-radio{--active-color:var(--toggle-active-color,var(--chef-primary-bright))}chef-radio chef-option{display:block;cursor:pointer;padding:.5em .75em;-webkit-transition:color .5s ease;transition:color .5s ease}chef-radio chef-option .option-content{padding-left:.5em}chef-radio chef-option:before{font-family:Material Icons;content:\"\";color:var(--chef-grey);vertical-align:-2px}chef-radio chef-option:hover,chef-radio chef-option:hover:before{color:var(--active-color);-webkit-transition:color 1s ease;transition:color 1s ease}chef-radio chef-option.selected{color:var(--active-color)}chef-radio chef-option.selected:before{font-family:Material Icons;content:\"\";color:var(--active-color)}"; }
}

export { ChefRadio as chef_radio };
