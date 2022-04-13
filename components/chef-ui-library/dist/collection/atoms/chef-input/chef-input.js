import { Host, h } from "@stencil/core";
/**
 * @description
 * An atom for defining inputs with chef specific styling. The input type
 * is supplied via the type prop and in most cases just passed down to the
 * internal input. So any type valid on a standard input should be valid
 * for chef-input. There are also some additional custom types that can
 * provide some added functionality. Currently the only additional type
 * provided is `key-value`. The key/value can be provided via the value
 * attribute as a ':' delimited string, 'key:value'.
 *
 * The underlying <input> element has autocomplete set to "off".
 *
 * @example
 * <chef-input placeholder='Enter value...'></chef-input>
 *
 * @example
 * <chef-input disabled placeholder='Cannot change value'></chef-input>
 *
 * @example
 * <chef-input value='foobar' placeholder='Enter value...'></chef-input>
 *
 * @example
 * <chef-input type='key-value' placeholder='Enter value...'></chef-input>
 *
 * @example
 * <chef-input placeholder='Enter value...' autocomplete="on"></chef-input>
 *
 * @example
 * <chef-input type='key-value' value='foobar:bizbang' placeholder='Enter value...'></chef-input>
 */
export class ChefInput {
    constructor() {
        /**
         * The value contained within the input.
         */
        this.value = '';
        /**
         * The type of input to use
         */
        this.type = 'text';
        /**
         * The placeholder text for the input.
         */
        this.placeholder = '';
        /**
         * Indicate input as disabled
         */
        this.disabled = false;
        /**
         * Enable or disable autocomplete for input (defaults to "off").
         */
        this.autocomplete = 'off';
        this.focused = false;
    }
    handleFocusin() {
        this.focused = true;
    }
    handleFocusout() {
        this.focused = false;
    }
    render() {
        return (h(Host, { class: this.focused ? 'focused' : '' }, this.renderContent()));
    }
    renderContent() {
        switch (this.type) {
            case 'key-value':
                return this.renderKeyValue();
            default:
                return this.renderDefault();
        }
    }
    renderKeyValue() {
        return (h("chef-input-key-value", { value: this.value, placeholder: this.placeholder, onChange: this.handleChange.bind(this) }));
    }
    renderDefault() {
        return (h("input", { type: this.type, value: this.value, placeholder: this.placeholder, onChange: this.handleChange.bind(this), disabled: this.disabled, "aria-disabled": this.disabled, autocomplete: this.autocomplete }));
    }
    handleChange(event) {
        this.value = event.target.value;
    }
    static get is() { return "chef-input"; }
    static get originalStyleUrls() { return {
        "$": ["./chef-input.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-input.css"]
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
                "text": "The value contained within the input."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The type of input to use"
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'text'"
        },
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The placeholder text for the input."
            },
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "''"
        },
        "disabled": {
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
                "text": "Indicate input as disabled"
            },
            "attribute": "disabled",
            "reflect": true,
            "defaultValue": "false"
        },
        "autocomplete": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Enable or disable autocomplete for input (defaults to \"off\")."
            },
            "attribute": "autocomplete",
            "reflect": false,
            "defaultValue": "'off'"
        }
    }; }
    static get states() { return {
        "focused": {}
    }; }
    static get listeners() { return [{
            "name": "focusin",
            "method": "handleFocusin",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "focusout",
            "method": "handleFocusout",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
