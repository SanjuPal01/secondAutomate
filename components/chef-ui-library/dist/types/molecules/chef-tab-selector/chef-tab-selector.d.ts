import { EventEmitter } from '../../stencil.core';
/**
 * @description
 * A selection of tabs. Uses the chef-option atom to define its different states.
 *
 * @example
 * <chef-tab-selector>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-tab-selector>
 *
 * @example
 * <chef-tab-selector value='opt2'>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-tab-selector>
 *
 * @example
 * <chef-tab-selector>
 *   <chef-option value='opt1'><chef-icon>thumb_up</chef-icon></chef-option>
 *   <chef-option value='opt2'><chef-icon>thumb_down</chef-icon></chef-option>
 * </chef-tab-selector>
 *
 * @example
 * <script>
 *   const toggle = document.querySelector('#ex1toggle');
 *   toggle.addEventListener('change', (event) => alert(event.target.value));
 * </script>
 *
 * <chef-tab-selector id='ex1toggle'>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-tab-selector>
 */
export declare class ChefTabSelector {
    /**
     * The value of the currently selected tab.
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
