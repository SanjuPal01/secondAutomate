import { EventEmitter } from '../../stencil.core';
/**
 * @description
 * A toggle button. Uses the chef-option atom to define it's different states.
 *
 * @example
 * <chef-radio>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-radio>
 */
export declare class ChefRadio {
    /**
     * The value of the currently toggled option.
     */
    value: string;
    el: HTMLElement;
    change: EventEmitter;
    input: EventEmitter;
    selected: HTMLChefOptionElement;
    handleClick(event: any): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    render(): any;
    clearOptions(): HTMLChefOptionElement[];
}
