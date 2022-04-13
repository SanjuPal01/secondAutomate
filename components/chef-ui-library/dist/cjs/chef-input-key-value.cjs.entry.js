'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

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
        __chunk_1.registerInstance(this, hostRef);
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
            this.editing === 'value' && key ? __chunk_1.h("chef-pill", null, key) : '',
            __chunk_1.h("input", { type: "text", value: this.editing === 'key' ? key : value, placeholder: this.placeholder, onKeyDown: this.handleUpdate.bind(this, key), onChange: this.handleChange.bind(this) })
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
    get el() { return __chunk_1.getElement(this); }
    static get style() { return "chef-input-key-value{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}chef-input-key-value chef-pill{margin-left:.5em;-ms-flex:1 0 auto;flex:1 0 auto}chef-input-key-value input{-ms-flex:0 1 auto;flex:0 1 auto}"; }
}

exports.chef_input_key_value = ChefInputKeyValue;
