import { EventEmitter } from '../../stencil.core';
/**
 * @description
 * A toggle button. Uses the chef-option atom to define it's different states.
 *
 * @example
 * <chef-phat-radio>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-phat-radio>
 *
 * @example
 * <chef-phat-radio deselectable value="opt2">
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-phat-radio>
 */
export declare class ChefPhatRadio {
    /**
     * The value of the currently toggled option.
     */
    value: string;
    /**
     * An optional property that when true allows users to deselect an option by selecting a currently selected option
     */
    deselectable: boolean;
    el: HTMLElement;
    change: EventEmitter;
    input: EventEmitter;
    selected: HTMLChefOptionElement;
    handleClick(event: MouseEvent): void;
    handleKeypress(event: KeyboardEvent): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    render(): any;
    clearOptions(): HTMLChefOptionElement[];
    selectOption(option: HTMLChefOptionElement): void;
}
