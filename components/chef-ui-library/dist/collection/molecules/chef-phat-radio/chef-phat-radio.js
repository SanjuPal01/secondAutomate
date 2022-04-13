import { h } from "@stencil/core";
import find from 'lodash/fp/find';
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
export class ChefPhatRadio {
    constructor() {
        /**
         * The value of the currently toggled option.
         */
        this.value = '';
        /**
         * An optional property that when true allows users to deselect an option by selecting a currently selected option
         */
        this.deselectable = false;
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
    static get is() { return "chef-phat-radio"; }
    static get originalStyleUrls() { return {
        "$": ["./chef-phat-radio.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-phat-radio.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The value of the currently toggled option."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
        },
        "deselectable": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "An optional property that when true allows users to deselect an option by selecting a currently selected option"
            },
            "attribute": "deselectable",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "change",
            "name": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "input",
            "name": "input",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "click",
            "method": "handleClick",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "keypress",
            "method": "handleKeypress",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
