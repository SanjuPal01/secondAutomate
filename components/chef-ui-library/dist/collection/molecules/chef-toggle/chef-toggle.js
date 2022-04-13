import { h } from "@stencil/core";
import find from 'lodash/fp/find';
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
export class ChefToggle {
    constructor() {
        /**
         * The value of the currently toggled option.
         */
        this.value = '';
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
    static get is() { return "chef-toggle"; }
    static get originalStyleUrls() { return {
        "$": ["./chef-toggle.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-toggle.css"]
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
        }]; }
}
