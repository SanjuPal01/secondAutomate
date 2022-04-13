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
export declare class ChefInputKeyValue {
    /**
     * The value contained within the input.
     */
    value: string;
    /**
     * The placeholder text for the input.
     */
    placeholder: string;
    el: HTMLElement;
    editing: 'key' | 'value';
    private changeEvent;
    componentDidLoad(): void;
    render(): any[];
    handleUpdate(key: any, event: any): void;
    handleChange(event: any): void;
}
