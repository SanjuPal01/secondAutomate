import { h } from "@stencil/core";
/**
 * @description
 * `chef-input-key-value` is the internal molecule used to implement the key-value
 * type for `chef-input`. For this reason it really shouldn't be used on its own.
 * Use `<chef-input type='key-value'></chef-input>` instead. See [chef-input](./chef-input)
 * for more info.
 *
 * @example
 * <chef-input type='key-value' value='foobar:bizbang'></chef-input>
 */
export class ChefInputKeyValue {
    constructor() {
        /**
         * The value contained within the input.
         */
        this.value = '';
        /**
         * The placeholder text for the input.
         */
        this.placeholder = '';
        this.editing = 'key';
        this.changeEvent = new Event('change', { bubbles: true });
    }
    componentDidLoad() {
        this.editing = this.value ? 'value' : 'key';
    }
    render() {
        const [key, value] = this.value.split(':');
        return [
            this.editing === 'value' && key ? h("chef-pill", null, key) : '',
            h("input", { type: "text", value: this.editing === 'key' ? key : value, placeholder: this.placeholder, onKeyDown: this.handleUpdate.bind(this, key), onChange: this.handleChange.bind(this) })
        ];
    }
    handleUpdate(key, event) {
        const localChangeEvent = new Event('change');
        switch (event.key) {
            case 'Tab':
                if (this.editing === 'key' && event.target.value) {
                    event.preventDefault();
                    event.target.dispatchEvent(localChangeEvent);
                }
                break;
            case 'Backspace':
                if (!event.target.value && this.editing === 'value') {
                    this.value = key;
                    this.editing = 'key';
                    this.el.dispatchEvent(this.changeEvent);
                }
                break;
        }
    }
    handleChange(event) {
        event.stopPropagation();
        if (this.editing === 'key' && event.target.value) {
            this.value = event.target.value;
            this.editing = 'value';
        }
        else if (event.target.value) {
            this.value = `${this.value.split(':')[0]}:${event.target.value}`;
        }
        else {
            this.value = '';
        }
        this.el.dispatchEvent(this.changeEvent);
    }
    static get is() { return "chef-input-key-value"; }
    static get originalStyleUrls() { return {
        "$": ["./chef-input-key-value.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-input-key-value.css"]
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
        }
    }; }
    static get states() { return {
        "editing": {}
    }; }
    static get elementRef() { return "el"; }
}
