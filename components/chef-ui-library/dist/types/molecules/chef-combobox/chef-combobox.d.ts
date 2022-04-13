import { EventEmitter } from '../../stencil.core';
/**
 * @description
 * The combobox is used to layout combination chef-select and chef-input fields.
 * The combobox can support one or more chef-inputs. Additional elements are layed
 * out via css grids.
 *
 * @example
 * <chef-combobox>
 *   <chef-select>
 *     <chef-option>Select Something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2'>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *     <chef-option value='opt4'>Option 4</chef-option>
 *   </chef-select>
 *   <chef-input></chef-input>
 * </chef-combobox>
 *
 * @example
 * <chef-combobox>
 *   <chef-select>
 *     <chef-option>Select Something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2'>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *     <chef-option value='opt4'>Option 4</chef-option>
 *   </chef-select>
 *   <chef-input></chef-input>
 *   <chef-input></chef-input>
 *   <chef-input></chef-input>
 *   <chef-input></chef-input>
 * </chef-combobox>
 *
 * @example
 * <chef-combobox>
 *   <chef-select>
 *     <chef-option>Select Something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2'>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *     <chef-option value='opt4'>Option 4</chef-option>
 *   </chef-select>
 *
 *   <chef-input></chef-input>
 *   <chef-button secondary caution><chef-icon>delete</chef-icon></chef-button>
 *
 *   <chef-input></chef-input>
 *   <chef-button secondary caution><chef-icon>delete</chef-icon></chef-button>
 *
 *   <chef-input></chef-input>
 *   <chef-button secondary caution><chef-icon>delete</chef-icon></chef-button>
 *
 *   <chef-input></chef-input>
 *   <chef-button secondary caution><chef-icon>delete</chef-icon></chef-button>
 *
 * </chef-combobox>
 */
export declare class ChefCombobox {
    el: HTMLElement;
    change: EventEmitter;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    render(): any;
    wrapButtons(): void;
}
