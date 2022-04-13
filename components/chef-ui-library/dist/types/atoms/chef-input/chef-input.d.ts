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
export declare class ChefInput {
    /**
     * The value contained within the input.
     */
    value: string;
    /**
     * The type of input to use
     */
    type: string;
    /**
     * The placeholder text for the input.
     */
    placeholder: string;
    /**
     * Indicate input as disabled
     */
    disabled: boolean;
    /**
     * Enable or disable autocomplete for input (defaults to "off").
     */
    autocomplete: string;
    focused: boolean;
    handleFocusin(): void;
    handleFocusout(): void;
    render(): any;
    renderContent(): any;
    renderKeyValue(): any;
    renderDefault(): any;
    handleChange(event: any): void;
}
