'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

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
class ChefInput {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        return (__chunk_1.h(__chunk_1.Host, { class: this.focused ? 'focused' : '' }, this.renderContent()));
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
        return (__chunk_1.h("chef-input-key-value", { value: this.value, placeholder: this.placeholder, onChange: this.handleChange.bind(this) }));
    }
    renderDefault() {
        return (__chunk_1.h("input", { type: this.type, value: this.value, placeholder: this.placeholder, onChange: this.handleChange.bind(this), disabled: this.disabled, "aria-disabled": this.disabled, autocomplete: this.autocomplete }));
    }
    handleChange(event) {
        this.value = event.target.value;
    }
    static get style() { return "chef-input{--border-color:var(--chef-grey);--default-focus-border:var(--chef-primary-bright);border:1px solid var(--border-color);-webkit-transition:border-color .5s ease;transition:border-color .5s ease;background-color:var(--chef-white);border-radius:var(--chef-border-radius);display:inline-block}chef-input.focused{border-color:var(--focus-border-color,var(--default-focus-border))}chef-input input{padding:1em;border-width:0;background-color:transparent;width:100%;font-family:inherit}chef-input input:focus{outline:none}"; }
}

exports.chef_input = ChefInput;
