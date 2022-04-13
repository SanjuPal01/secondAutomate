import { r as registerInstance, h, c as getElement } from './chunk-efdec40a.js';

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
class ChefInputKeyValue {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
    static get style() { return "chef-input-key-value{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}chef-input-key-value chef-pill{margin-left:.5em;-ms-flex:1 0 auto;flex:1 0 auto}chef-input-key-value input{-ms-flex:0 1 auto;flex:0 1 auto}"; }
}

export { ChefInputKeyValue as chef_input_key_value };
