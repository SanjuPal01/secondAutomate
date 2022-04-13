import { r as registerInstance, d as createEvent, h, c as getElement } from './chunk-efdec40a.js';
import './chunk-d7ac2f15.js';
import './chunk-464ede08.js';
import { f as find } from './chunk-7cba3003.js';

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
        registerInstance(this, hostRef);
        /**
         * The value of the currently toggled option.
         */
        this.value = '';
        /**
         * An optional property that when true allows users to deselect an option by selecting a currently selected option
         */
        this.deselectable = false;
        this.change = createEvent(this, "change", 7);
        this.input = createEvent(this, "input", 7);
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
        this.selected = find(['value', this.value], options);
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
        return (h("slot", null));
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
    get el() { return getElement(this); }
    static get style() { return "\@charset \"UTF-8\";chef-phat-radio{--active-color:var(--toggle-active-color,var(--chef-primary-bright));display:block}chef-phat-radio chef-option{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;background-color:var(--chef-white);-webkit-box-shadow:0 0 16px 0 #e6ebee;box-shadow:0 0 16px 0 #e6ebee;cursor:pointer;padding:1em;border-radius:5px;height:60px;width:175px;margin-right:8px}chef-phat-radio chef-option:nth-child(n+2){margin-left:8px}chef-phat-radio chef-option .option-content{padding-left:.5em}chef-phat-radio chef-option:before{font-family:Material Icons;content:\"\";color:var(--chef-grey);font-size:20px}chef-phat-radio chef-option:hover,chef-phat-radio chef-option:hover:before{color:var(--active-color);-webkit-transition:color 1s ease;transition:color 1s ease}chef-phat-radio chef-option.selected{color:var(--active-color)}chef-phat-radio chef-option.selected:before{font-family:Material Icons;content:\"\";color:var(--active-color)}"; }
}

export { ChefPhatRadio as chef_phat_radio };
