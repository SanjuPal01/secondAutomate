/**
 * @description
 * A wrapper element that traps focus inside of the element. Very useful for accessibility purposes.
 *
 * @example
 *
 * <chef-trap-focus>
 *  <input type="text"/>
 *  <p>Some non-focus-able text</p>
 *  <p tabindex="0">Some focus-able text</p>
 *  <input type="text"/>
 *  <button>Button</button>
 * </chef-trap-focus>
 */
export declare class ChefTrapFocus {
    el: HTMLElement;
    /**
     * Class name to omit
     */
    trap: boolean;
    render(): any;
    componentDidLoad(): void;
}
