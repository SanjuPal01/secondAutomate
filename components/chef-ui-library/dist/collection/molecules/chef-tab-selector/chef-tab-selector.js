import { h } from "@stencil/core";
import find from 'lodash/fp/find';
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
export class ChefTabSelector {
    constructor() {
        /**
         * The value of the currently selected tab.
         */
        this.value = '';
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
    static get is() { return "chef-tab-selector"; }
    static get originalStyleUrls() { return {
        "$": ["./chef-tab-selector.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-tab-selector.css"]
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
                "text": "The value of the currently selected tab."
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
