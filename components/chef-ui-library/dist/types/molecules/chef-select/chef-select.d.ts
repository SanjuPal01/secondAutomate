import { EventEmitter } from '../../stencil.core';
/**
 * @description
 * The `<chef-select>` molecule defines a custom select molecule. The select molecule
 * will fill the width of it's container.
 *
 * @example
 * <div style='width: 200px'>
 *   <chef-select>
 *     <chef-option>select something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2'>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *   </chef-select>
 * </div>
 *
 * @example
 * <div style='width: 200px'>
 *   <chef-select>
 *     <chef-option>select something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2' selected>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *   </chef-select>
 * </div>
 *
 * @example
 * <div style='width: 200px'>
 *   <chef-select value='opt3'>
 *     <chef-option>select something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2'>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *   </chef-select>
 * </div>
 *
 * @example
 * <div style='width: 200px'>
 *   <chef-select value='opt3' change='alert("Value Changed!")'>
 *     <chef-option>select something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2'>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *   </chef-select>
 * </div>
 *
 * @example
 * <div style='width: 200px'>
 *   <chef-select disabled='true'>
 *     <chef-option>select something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2'>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *   </chef-select>
 * </div>
 */
export declare class ChefSelect {
    /**
     * The selected value
     */
    value: string;
    /**
     * Disable your select menu by setting this to true
     */
    disabled: boolean;
    options: HTMLChefOptionElement[];
    selectedIndex: number;
    selectedContent: string;
    focusedIndex: number;
    focused: boolean;
    active: boolean;
    minWidth: number;
    /**
     * Emitted when the value of the molecule changes.
     */
    change: EventEmitter;
    el: HTMLElement;
    handleFocus(): void;
    handleFocusOut(event: any): void;
    handleClickActivation(event: any): void;
    handleKeydown(event: KeyboardEvent): void;
    handleKeyActivation(): void;
    handleEscape(): void;
    handleUp(event: KeyboardEvent): void;
    handleDown(event: KeyboardEvent): void;
    componentDidLoad(): void;
    componentWillUpdate(): Promise<void>;
    render(): any;
    private clamp;
    private makeSelection;
    private activate;
    private syncOptions;
}
